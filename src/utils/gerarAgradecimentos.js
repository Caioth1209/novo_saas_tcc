import { AlignmentType,HeadingLevel, Paragraph } from "docx";

export const gerarAgradecimentos = async (sections) => {
    const agradecimentosTitle = new Paragraph({
        text: "Agradecimentos",
        heading: HeadingLevel.HEADING_3,
        alignment: AlignmentType.CENTER,
        
    });

    const agradecimentosEntries = new Paragraph({
        text: '[AQUI VOCÊ PODE ESCREVER UM AGRADECIMENTO]',
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
            agradecimentosTitle,
            agradecimentosEntries
        ],
    }

    sections.push(newSection);
};