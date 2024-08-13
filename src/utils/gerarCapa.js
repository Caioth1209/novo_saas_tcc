import { AlignmentType, Header, PageNumber, Paragraph, TextRun } from "docx";

import regrasABNT from "./regrasABNT.js";

export const gerarCapa = async (sections) => {
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
            after: 7000,
        },
    });

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
            before: 1000,
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
        spacing: {
            after: 360, //1,5
        },
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
            cidade,
            ano,
        ],

    }

    sections.push(newSection);
};