import { AlignmentType, Header, PageNumber, Paragraph, TextRun, TabStopType, TabStopPosition, FrameAnchorType, HorizontalPositionAlign, VerticalPositionAlign } from "docx";

import regrasABNT from "./regrasABNT.js";

export const gerarFolhaDeAvaliacao = async (sections) => {
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
                children: [`Trabalho de conclusão de curso apresentado como requisito parcial para obtenção do título de Bacharel em [NOME DO CURSO], pela Universidade [NOME DA UNIVERSIDADE].
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

    const aprovadoEm = new Paragraph({
        children: [
            new TextRun({
                children: ["Aprovado em: XX de XXXX de 201X"],
                size: 20,
                bold: false,
            }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: {
            before: 1000,
            after: 1000,
        },

    })

    const banca = new Paragraph({
        children: [
            new TextRun({
                children: ["Banca Examinadora"],
                size: 20,
                bold: true,
            }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: {
            before: 1000,
            after: 0,
        },

    })

    const linha = new Paragraph({
        children: [
            new TextRun({
                children: ["_____________________________________"],
                size: 20,
                bold: true,
            }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: {
            before: 720,
            after: 0,
        },
    })

    const nomeOrientador = new Paragraph({
        children: [
            new TextRun({
                children: ["(Nome do orientador, sua titulação e Instituição a que pertence)."],
                size: 20,
                bold: false,
            }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: {
            before: 120,
            after: 0,
        },
    })

    const examinador = new Paragraph({
        children: [
            new TextRun({
                children: ["(Nome, titulação e instituição a que pertence)."],
                size: 20,
                bold: false,
            }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: {
            before: 120,
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
            aprovadoEm,
            banca,
            linha,
            nomeOrientador,
            linha,
            examinador,
            linha,
            examinador,
        ],

    }

    sections.push(newSection);
};