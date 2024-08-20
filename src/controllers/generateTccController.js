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

const referencias = [];

const removerPalavras = (referencia) => {

    let palavrasParaRemover = ["referências bibliográficas", "referências", "Referências Bibliográficas", "Referências", "Bibliográficas", "bibliográficas", "bibliográficas:", "REFERÊNCIAS", "BIBLIOGRÁFICAS", "BIBLIOGRÁFICAS:", "****"];

    palavrasParaRemover.forEach((palavra) => {
        referencia = referencia.replace(palavra, '');
    });

    return referencia;
}


const gerarReferencias = async (headings, sections) => {
    console.log('Gerando referências...');

    let referenciasFiltradas = referencias.map(removerPalavras);
    console.log('Referências filtradas:', referenciasFiltradas);

    let referenciasOrdenadas = ordenarReferencias(referenciasFiltradas);
    console.log('Referências ordenadas:', referenciasOrdenadas);

    // Cria um array de parágrafos formatados
    const formattedParagraphs = referenciasOrdenadas.map((paragraphText) => {
        return new Paragraph({
            text: paragraphText,
            alignment: AlignmentType.JUSTIFIED,
            heading: HeadingLevel.HEADING_4,
            indent: {
                firstLine: '2cm'
            },
        });
    });

    // Adiciona o título da seção
    const sectionChildren = [
        new Paragraph({
            text: `${headings.referencias.number}. Referências Bibliográficas`,
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.LEFT,
            spacing: {
                after: 600,
            },
        })
    ];

    sectionChildren.push(...formattedParagraphs);

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

    console.log('Referências adicionadas à seção.');
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
            return res.status(200).json({ message: "nao existe no email" })
        }

        const { tema, areaEstudo, objetivo, perguntaPesquisa, } = docSnapshot.data()

        if (!tema || !areaEstudo || !objetivo || !perguntaPesquisa) return res.status(400).send("Dados invalidos")

        generateTcc(tema, areaEstudo, objetivo, perguntaPesquisa, "monografia", sections)
            .then(res => {
                console.log('TCC gerado com sucesso. Enviando email...');
                Packer.toBlob(res).then(async (blob) => {
                    pkg.saveAs(blob, `./tccturbo.docx`);
                    await sendTcc(blob, email)
                    await adminApp.firestore().collection("orders").doc(email).set({
                        tema,
                        areaEstudo,
                        objetivo,
                        perguntaPesquisa,
                        pagamento: true
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

const generateController = { generateAsyncTcc };

export default generateController;
