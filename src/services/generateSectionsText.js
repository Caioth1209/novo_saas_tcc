import { AlignmentType, HeadingLevel, Paragraph, TextRun } from "docx";
import { generateTextBySection } from "./generateTextBySection.js";
import { headers } from "../utils/numeracao.js";
import axios from "axios";
import { openai } from "./openai.js";

export const generateSectionsTexts = async (prompts, headings, sections, referencias, tema, areaEstudo, objetivo, perguntaPesquisa) => {
    try {
        console.log('Iniciando a geração dos textos das seções...');

        //const res = await axios.post(`https://web-scraping-pa3r.onrender.com/referencias`, { temaTcc: tema });
        //console.log('Referências obtidas:', res.data);

        for (let i = 0; i < prompts.length; i++) {
            console.log(`Gerando texto para a seção ${i + 1} de ${prompts.length}...`);

            // Adiciona um atraso para evitar excesso de requisições
            await new Promise(resolve => setTimeout(resolve, 1000));

            let sectionChildren = [];
            let paragraphs = [];
            let parts = [];

            // Gerando o texto por seção
            const sectionText = await generateTextBySection(prompts[i], tema, areaEstudo, objetivo, perguntaPesquisa, 'file-uLpcKiQJHHkLifS8tqq82rQj');
            console.log(`Texto da seção ${i + 1}:`, sectionText);

            const content = sectionText.replaceAll(String.fromCharCode(12304), "[[")
                .replaceAll(String.fromCharCode(12305), "]]")
                .replaceAll(/\[\[.*?\]\]/g, '');

            console.log(`Conteúdo limpo da seção ${i + 1}:`, content);
            if (!sectionText) {
                console.error(`Erro: texto da seção ${i + 1} é undefined.`);
                continue; // Pule para a próxima seção
            } else if (!content) {
                console.error(`Erro: conteúdo da seção ${i + 1} é undefined ou vazio.`);
                continue; // Pule para a próxima seção
            } else if (content) {
                if (prompts[i].hasReferences) {
                    parts = content.split('\\r');
                    paragraphs = parts[0] ? parts[0].split('\\n') : [];
                    if (parts[1]) {
                        parts[1].split('\\n').forEach((referencia) => {
                            referencias.push(referencia);
                        });
                    }
                    console.log('Referências adicionadas:', referencias);
                } else {
                    paragraphs = content.split('\\n');
                }

                if (!prompts[i].isContinuation) {
                    sectionChildren.push(
                        new Paragraph({
                            text: `${headings[prompts[i].key].number}. ${headings[prompts[i].key].title}`,
                            heading: HeadingLevel.TITLE,
                            alignment: AlignmentType.LEFT,
                            spacing: {
                                after: 600,
                            },
                        })
                    );
                }

                paragraphs.forEach((paragraphText) => {
                    sectionChildren.push(
                        new Paragraph({
                            text: paragraphText.trim(),
                            alignment: AlignmentType.JUSTIFIED,
                            heading: HeadingLevel.HEADING_4,
                            indent: {
                                firstLine: '2cm',
                            },
                        })
                    );
                });

                if (prompts[i].isContinuation) {
                    sections[sections.length - 1].children.push(...sectionChildren);
                } else {
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
                        headers: headers,
                        children: sectionChildren,
                    });
                }

                console.log(`Seção ${i + 1} adicionada.`);
                sectionChildren = [];
            } else {
                console.warn(`Nenhum conteúdo gerado para a seção ${i + 1}.`);
            }

        }

        // Limpa o arquivo gerado no OpenAI
        console.log('Arquivo de referências excluído.');

    } catch (err) {
        console.error('Erro na geração dos textos das seções:', err);
        throw new Error(err);
    }
};
