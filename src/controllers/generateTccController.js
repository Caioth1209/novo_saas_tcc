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

let sections = [];
const referencias = [];

const removerPalavras = (referencia) => {

    let palavrasParaRemover = ["referências bibliográficas", "referências", "Referências Bibliográficas", "Referências", "Bibliográficas", "bibliográficas", "bibliográficas:", "REFERÊNCIAS", "BIBLIOGRÁFICAS", "BIBLIOGRÁFICAS:"];

    palavrasParaRemover.forEach((palavra) => {
        referencia = referencia.replace(palavra, '');
    });

    return referencia;
}


const gerarReferencias = async (headings) => {
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

async function generateTcc(tema, areaEstudo, objetivo, perguntaPesquisa, tipoTrabalho) {
    console.log(`Gerando TCC: ${tipoTrabalho}`);

    let promptsAtual;

    let headings = tipoTrabalho == 'preProjeto' ? headingsPreProjeto : headingsMonografia;

    await gerarCapa(sections);
    console.log('Capa gerada.');

    await gerarFolhaDeRosto(sections);
    console.log('Folha de Rosto gerada.');

    await gerarFolhaDeAvaliacao(sections);
    console.log('Folha de Avaliação gerada.');

    await gerarDedicatoria(sections);
    console.log('Dedicatoria gerada.');

    await gerarAgradecimentos(sections);
    console.log('Agradecimentos gerados.');

    await gerarSumario(sections, headings);
    console.log('Sumário gerado.');

    if (tipoTrabalho == 'preProjeto') promptsAtual = promtpsPreProjeto;
    else promptsAtual = promptsMonografia;

    await generateSectionsTexts(promptsAtual, headings, sections, referencias, tema, areaEstudo, objetivo, perguntaPesquisa, tipoTrabalho);
    console.log('Seções geradas.');

    await gerarReferencias(headings);
    console.log('Referências geradas.');
    const docFormatado = await formatar(sections)
    return docFormatado
}

async function generateAsyncTcc(req, res) {

    const tema = "A influência das redes sociais na saúde mental de adolescentes"
    const areaEstudo = "Psicologia"
    const objetivo = "Avaliar a influência das redes sociais na saúde mental dos adolescentes"
    const perguntaPesquisa = "Como o uso frequente das redes sociais afeta a autoestima, ansiedade e depressão em adolescentes, e quais estratégias podem ser utilizadas para minimizar possíveis impactos negativos na saúde mental desses jovens?"

    try {
        generateTcc(tema, areaEstudo, objetivo, perguntaPesquisa)
            .then(res => {
                console.log('TCC gerado com sucesso. Enviando email...');
                Packer.toBlob(res).then(async (blob) => {
                    pkg.saveAs(blob, `./tccautomatico.docx`);

                    const formData = new FormData();
                    formData.append('file', blob, 'tccautomatico.docx');
                    formData.append('email', 'ivanaires32@gmail.com')
                    // Enviar o arquivo para o servidor
                    await axios.post('https://server-saas-tcc.vercel.app/email/send-tcc', formData)
                        .then(response => response)
                        .then(data => {
                            console.log('Email enviado:', data);
                        })
                        .catch(error => {
                            console.error('Erro ao enviar email:', error);
                        });
                });
            })
            .catch(err => {
                console.error('Erro ao gerar TCC:', err);
            });

        res.send('OK!');
    } catch (error) {
        console.error('Erro ao processar solicitação:', error);
        res.status(500).send({ error });
    }
}

const generateController = { generateAsyncTcc };

export default generateController;
