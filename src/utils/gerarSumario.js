import { AlignmentType, HeadingLevel, Paragraph } from "docx";
import regrasABNT from "./regrasABNT.js";


export const gerarSumario = async (sections, headings) => {
    const sumarioTitle = new Paragraph({
        text: "SUMÁRIO",
        // heading: HeadingLevel.HEADING_3,
        alignment: regrasABNT.sumario.titulo.alignment,
        size: regrasABNT.sumario.titulo.TAM_FONT,
        heading: regrasABNT.sumario.titulo.TAM_FONT,
    });

    const sumarioEntries = Object.keys(headings).map((key, index) => {
        return new Paragraph({
            text: `${index + 1}. ${headings[key].title}`,
            // heading: HeadingLevel.HEADING_3,
            heading: regrasABNT.sumario.capitulos.TAM_FONT,
            size: regrasABNT.sumario.capitulos.TAM_FONT,
            alignment: regrasABNT.sumario.capitulos.alignment,
            spacing: {
                line: regrasABNT.sumario.capitulos.entrelinhamento,
            },
        });
    });


    const newSection = {
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
        children: [
            sumarioTitle,
            ...sumarioEntries,
        ],
    }

    sections.push(newSection);
};
