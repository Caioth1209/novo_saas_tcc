import { AlignmentType, HeadingLevel, Paragraph } from "docx";

export const gerarDedicatoria = async (sections) => {
    const decatoriaTitle = new Paragraph({
        text: "Dedicatória",
        heading: HeadingLevel.HEADING_3,
        alignment: AlignmentType.CENTER,
        
    });

    const dedicatoriaEntries = new Paragraph({
        text: '[AQUI VOCÊ PODE ESCREVER UMA DEDICATÓRIA]',
        heading: HeadingLevel.HEADING_3,
        alignment: AlignmentType.CENTER,
        spacing: {
            before: 1000,
        },
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
            decatoriaTitle,
            dedicatoriaEntries
        ],
    }

    sections.push(newSection);
};