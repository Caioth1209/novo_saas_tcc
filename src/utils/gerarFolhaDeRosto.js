import { AlignmentType, Paragraph, TextRun, FrameAnchorType, HorizontalPositionAlign } from "docx";

import regrasABNT from "./regrasABNT.js";

export const gerarFolhaDeRosto = async (sections) => {
    const instituicao = new Paragraph({
        children: [
            new TextRun({
                children: ["[PREENCHA AQUI O NOME DA INSTITUIÇÃO]"],
                size: regrasABNT.capa.nomeDaInstituicao.TAM_FONT,
                bold: regrasABNT.capa.nomeDaInstituicao.bold,
            }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: {
            before: 1000,
            after: 2000,
        },
    });

    const autor = new Paragraph({
        children: [
            new TextRun({
                children: ["[PREENCHA AQUI O AUTOR]"],
                size: regrasABNT.capa.autor.TAM_FONT,
                bold: regrasABNT.capa.autor.bold,
            }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: {
            before: 1000,
            after: 2000,
        },
    });

    const titulo = new Paragraph({
        children: [
            new TextRun({
                children: ["[PREENCHA AQUI O TÍTULO]"],
                size: regrasABNT.capa.titulo.TAM_FONT,
                bold: regrasABNT.capa.titulo.bold,
            }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: {
            before: 1000,
            after: 3000,
        },
    });

    const notaIndicativa = new Paragraph({
        frame: {
            position: {
                x: 5000,
                y: 6360,
            },
            width: 5000,
            anchor: {
                horizontal: FrameAnchorType.MARGIN,
            },
            alignment: {
                x: HorizontalPositionAlign.RIGHT,
            },
        },
        children: [
            new TextRun({
                children: [`Trabalho apresentado a Universidade [PREENCHA A UNIVERSIDADE], como requisito parcial para obtenção do titulo de [PREENCHA O TITULO].
                `],
                size: 20,
                bold: false,
            }),
        ],
        alignment: AlignmentType.LEFT,
        spacing: {
            before: 1000,
            after: 0,
        },
    })

    const orientador = new Paragraph({
        frame: {
            position: {
                x: 5000,
                y: 7720,
            },
            width: 5000,
            anchor: {
                horizontal: FrameAnchorType.MARGIN,
                // vertical: FrameAnchorType.MARGIN,
            },
            alignment: {
                x: HorizontalPositionAlign.RIGHT,
            },
        },
        children: [
            new TextRun({
                children: [`Orientador: [PREENCHA AQUI O NOME DO ORIENTADOR]`],
                size: 20,
                bold: false,
            }),

        ],
        alignment: AlignmentType.LEFT,
        spacing: {
            before: 500,
            after: 0,
        },
    })

    const cidade = new Paragraph({
        children: [
            new TextRun({
                children: ["[PREENCHA AQUI A CIDADE]"],
                size: regrasABNT.capa.cidade.TAM_FONT,
                bold: regrasABNT.capa.cidade.bold,
            }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: {
            before: 7720,
            after: 360, //1,5
        },
    });

    const ano = new Paragraph({

        children: [
            new TextRun({
                children: ["[PREENCHA AQUI O ANO]"],
                size: regrasABNT.capa.ano.TAM_FONT,
                bold: regrasABNT.capa.ano.bold,
            }),
        ],
        alignment: AlignmentType.CENTER,
    });

    const newSection = {
        properties: {
            page: {
                margin: {
                    top: 1134, // 3 cm
                    right: 800, // 2 cm
                    bottom: 1134, // 3 cm
                    left: 1134, // 3 cm
                },
            },
        },
        children: [
            instituicao,
            autor,
            titulo,
            notaIndicativa,
            orientador,
            cidade,
            ano,
        ],

    }

    sections.push(newSection);
};