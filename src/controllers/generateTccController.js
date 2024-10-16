import { AlignmentType, HeadingLevel, Packer, Paragraph } from "docx";
import headingsMonografia from "../data/monografia/headingsMonografia.js";
import promptsMonografia from "../data/monografia/promptsMonografia.js";
import headingsPreProjeto from "../data/preProjeto/headingsPreProjeto.js";
import promtpsPreProjeto from "../data/preProjeto/promtpsPreProjeto.js";
import { gerarAgradecimentos } from "../utils/gerarAgradecimentos.js";
import { gerarCapa } from "../utils/gerarCapa.js";
import { gerarDedicatoria } from "../utils/gerarDedicatoria.js";
import { gerarFolhaDeAvaliacao } from "../utils/gerarFolhaDeAvaliacao.js";
import { gerarFolhaDeRosto } from "../utils/gerarFolhaDeRosto.js";
import { gerarSumario } from "../utils/gerarSumario.js";
import { ordenarReferencias } from "../utils/ordenarReferencias.js";
import axios from "axios";
import { generateSectionsTexts } from "../services/generateSectionsText.js";
import { formatar } from "../utils/formatar.js";
import pkg from "file-saver";
import { adminApp } from '../services/firebaseAdmin.js';
import { sendAwaitTcc, sendTcc } from "../utils/sendEmail.js";
import fs from 'fs'

const referencias = [];

const removerPalavras = (referencia) => {

    let palavrasParaRemover = ["referências bibliográficas", "referências", "Referências Bibliográficas", "Referências", "Bibliográficas", "bibliográficas", "bibliográficas:", "REFERÊNCIAS", "BIBLIOGRÁFICAS", "BIBLIOGRÁFICAS:", "****"];

    palavrasParaRemover.forEach((palavra) => {
        referencia = referencia.replace(palavra, '');
    });

    return referencia;
}


const gerarReferencias = async (headings, sections) => {
    let referenciasFiltradas = referencias.map(removerPalavras);

    let referenciasOrdenadas = ordenarReferencias(referenciasFiltradas);

    const refCount = new Set();
    const formattedParagraphs = [];

    for (const element of referenciasOrdenadas) {
        const ref = element.split('\n');

        for (const el of ref) {
            if (el.trim() !== '') {
                const cleanedEl = el.endsWith('.') ? el.slice(0, -1) : el;
                if (!refCount.has(cleanedEl)) {
                    refCount.add(cleanedEl);
                    formattedParagraphs.push(new Paragraph({
                        text: cleanedEl.trim(),
                        alignment: AlignmentType.JUSTIFIED,
                        heading: HeadingLevel.HEADING_4,
                        indent: {
                            firstLine: '2cm'
                        },
                    }));
                }
            }
        }
    }

    // Adiciona o título da seção
    const sectionChildren = [
        new Paragraph({
            text: `${headings.referencias.number}. Referências Bibliográficas`,
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.LEFT,
            spacing: {
                after: 600,
            },
        }),
        ...formattedParagraphs // Adiciona os parágrafos formatados
    ];

    sections.push({
        properties: {
            page: {
                margin: {
                    top: 1134, // 3 cm
                    right: 800, // 2 cm
                    bottom: 800, // 3 cm
                    left: 1134, // 3 cm
                },
            },
        },
        children: sectionChildren,
    });
};


async function generateTcc(tema, areaEstudo, objetivo, perguntaPesquisa, tipoTrabalho, sections) {
    console.log(`Gerando TCC: ${tipoTrabalho}`);

    let promptsAtual;

    let headings = headingsMonografia;

    await gerarCapa(sections);

    await gerarFolhaDeRosto(sections);

    await gerarFolhaDeAvaliacao(sections);

    await gerarDedicatoria(sections);

    await gerarAgradecimentos(sections);

    await gerarSumario(sections, headings);

    // if (tipoTrabalho == 'preProjeto') promptsAtual = promtpsPreProjeto;
    // else promptsAtual = promptsMonografia;

    promptsAtual = promptsMonografia;

    await generateSectionsTexts(promptsAtual, headings, sections, referencias, tema, areaEstudo, objetivo, perguntaPesquisa, tipoTrabalho);

    await gerarReferencias(headings, sections);
    console.log('Referências geradas.');
    const docFormatado = await formatar(sections)
    sections = []
    return docFormatado
}

async function generateAsyncTcc(req, res) {

    try {
        const email = req.email

        let sections = []

        const docSnapshot = await adminApp.firestore().collection("orders").doc(email).get()

        if (!docSnapshot.exists) {
            await adminApp.firestore().collection("orders").doc(email).set({
                pagamento: true,
                gerouTcc: false,
                created_at: new Date()
            })
            return res.status(201).send("Dados registrados")
        }

        const { tema, areaEstudo, objetivo, perguntaPesquisa, gerouTcc } = docSnapshot.data()
        // const { tema, areaEstudo, objetivo, perguntaPesquisa, gerouTcc, email } = await req.body

        if (!tema || !areaEstudo || !objetivo || !perguntaPesquisa) {
            return res.status(400).send("Dados invalidos")
        } else if (gerouTcc) {
            return res.status(400).send("Este Trabalho Ja foi gerado")
        }

        generateTcc(tema, areaEstudo, objetivo, perguntaPesquisa, "monografia", sections)
            .then(res => {
                console.log('TCC gerado com sucesso. Enviando email...');
                Packer.toBlob(res).then(async (blob) => {
                    const filePath = "./tccturbo.docx"
                    
                    // //apenas para testes em local
                    // const buffer = await blob.arrayBuffer();
                    

                    // fs.writeFile(filePath, Buffer.from(buffer), (err) => {
                    //     if(err) {
                    //         console.error("Erro ao salvar o arquivo: ", err)
                    //     } else {
                    //         console.log("Arquivo salvo com sucesso na raiz do projeto")
                    //     }
                    // })
                    // // fim da area de teste

                    pkg.saveAs(blob, filePath);
                    await sendTcc(blob, email)
                    await adminApp.firestore().collection("orders").doc(email).set({
                        ...docSnapshot.data(),
                        pagamento: false,
                        gerouTcc: true
                    })
                    sections = []
                });
            })
            .catch(err => {
                console.error('Erro ao gerar TCC:', err);
            });

        sendAwaitTcc(email)

        res.status(200).send({ message: 'ok' });
    } catch (error) {
        console.error('Erro ao processar solicitação:', error);
        res.status(200).send({ error });
    }
}

async function tccPromocao(req, res) {
    const { email } = req.body

    let sections = []

    try {
        const docSnapshot = await adminApp.firestore().collection("orders").doc(email).get()

        if (!docSnapshot.exists) return res.status(200).json({ message: "nao existe no email" })
        else if (!docSnapshot.data().pagamento) return res.status(200).json({ message: "Pagamento não realizado" })
        else if (docSnapshot.data().gerouTcc) return res.status(200).json({ message: "Este trabalho já foi gerado" })
    
        const { tema, areaEstudo, objetivo, perguntaPesquisa } = docSnapshot.data()
    
        if (!tema || !areaEstudo || !objetivo || !perguntaPesquisa) {
            return res.status(400).send("Dados invalidos")
        }

        await sendAwaitTcc(email)
    
    
        await generateTcc(tema, areaEstudo, objetivo, perguntaPesquisa, "monografia", sections)
            .then(res => {
                console.log('TCC gerado com sucesso. Enviando email...');
                Packer.toBlob(res).then(async (blob) => {
                    pkg.saveAs(blob, `./tccturbo.docx`);
                    await sendTcc(blob, email)
                    await adminApp.firestore().collection("orders").doc(email).set({
                        ...docSnapshot.data(),
                        pagamento: false,
                        gerouTcc: true
                    })
                    sections = []
                });
            })
            .catch(err => {
                console.error('Erro ao gerar TCC:', err);
            });

        res.status(200).send({ message: 'ok' });
    } catch (err) {
        console.log("Erro ao gerar o tcc: ", err)
        res.status(500).send(err)
    }

    

}

const generateController = { generateAsyncTcc, tccPromocao };

export default generateController;
