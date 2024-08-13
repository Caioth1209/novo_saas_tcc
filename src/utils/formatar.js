import { Document } from 'docx';

import regrasABNT from './regrasABNT.js';

export const formatar = async (sections) => {

    return new Document({
        title: "Tcc Automático",
        sections: sections,
        styles: {
            default: {
                title: {
                    run: {
                        font: "Times New Roman",
                        size: regrasABNT.section.subtitulo.TAM_FONT,
                        bold: regrasABNT.section.subtitulo.bold,
                    },
                    paragraph: {
                        spacing: {
                            line: regrasABNT.section.conteudo.entrelinhamento,
                        },
                    },
                },
                heading2: {
                    run: {
                        font: "Times New Roman",
                        size: regrasABNT.section.subtitulo.TAM_FONT,
                    },
                },
                heading3: {
                    run: {
                        font: "Times New Roman",
                        size: 38,
                    },
                    paragraph: {
                        spacing: {
                            before: 240,
                            after: 300,
                        },
                    },
                },
                heading4: {
                    run: {
                        font: "Times New Roman",
                        size: 24,
                    },
                    paragraph: {
                        spacing: {
                            after: 280,
                            line: 424.5, // 1.5cm
                        },
                    },
                },
            },
        },
    })
}