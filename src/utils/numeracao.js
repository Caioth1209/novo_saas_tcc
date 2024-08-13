import { AlignmentType, Header, PageNumber, Paragraph, TextRun } from "docx";

export const headers = {
    default: new Header({
        children: [
            new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                    new TextRun({
                        children: [PageNumber.CURRENT],
                        size: 28,
                        bold: true,
                    }),
                ],
            }),
        ],
    }),
}