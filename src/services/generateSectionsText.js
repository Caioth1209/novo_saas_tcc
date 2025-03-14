import { AlignmentType, HeadingLevel, Paragraph, TextRun } from "docx";
import { generateTextBySection } from "./generateTextBySection.js";
import { headers } from "../utils/numeracao.js";
import axios from "axios";
import { openai } from "./openai.js";

export const generateSectionsTexts = async (prompts, headings, sections, referencias, tema, areaEstudo, objetivo, perguntaPesquisa) => {
    try {
        //const res = await axios.post(`https://web-scraping-pa3r.onrender.com/referencias`, { temaTcc: tema });
        //const fileId = res.data.fileId
        const thread = await openai.beta.threads.create();

        for (let i = 0; i < prompts.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 1000));

            let sectionChildren = [];
            let paragraphs = [];
            let parts = [];

            // Gerando o texto por seção
            const sectionText = await generateTextBySection(prompts[i], tema, areaEstudo, objetivo, perguntaPesquisa, thread);

            const content = sectionText.replaceAll(String.fromCharCode(12304), "[[")
                .replaceAll(String.fromCharCode(12305), "]]")
                .replaceAll(/\[\[.*?\]\]/g, '');

            if (!sectionText) {
                console.error(`Erro: texto da seção ${i + 1} é undefined.`);
                continue; // Pule para a próxima seção
            } else if (!content) {
                console.error(`Erro: conteúdo da seção ${i + 1} é undefined ou vazio.`);
                continue; // Pule para a próxima seção
            } else if (content) {
                if (prompts[i].hasReferences) {
                    parts = content.split('[r]');
                    paragraphs = parts[0] ? parts[0].split(parts[0].includes('[--]') ? '[--]' : '--') : [];
                    if (parts[1]) {
                        parts[1].split(parts[1].includes('[--]') ? '[--]' : '--').forEach((referencia) => {
                            referencias.push(referencia);
                        });
                    }
                } else {
                    paragraphs = content.split(content.includes('[--]') ? '[--]' : '--');
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

                sectionChildren = [];
            } else {
                console.warn(`Nenhum conteúdo gerado para a seção ${i + 1}.`);
            }

        }


    } catch (err) {
        console.error('Erro na geração dos textos das seções:', err);
        throw new Error(err);
    }
};
