import { AlignmentType, Header, PageNumber, Paragraph, TextRun } from "docx";
const Multiplicador = 2 //lib trabalha com meia    
export default {
    
    capa: {
        nomeDaInstituicao: {
            TAM_FONT: 12 * Multiplicador,
            alignment: AlignmentType.CENTER,
            bold: true,
            entrelinhamento: 360 //1,5 para fonte de 12
        },

        autor: {
            TAM_FONT: 12 * Multiplicador,
            alignment: AlignmentType.CENTER,
            bold: true,
            entrelinhamento: 360
        },

        titulo: {
            TAM_FONT: 12 * Multiplicador,
            alignment: AlignmentType.CENTER,
            bold: true,
            entrelinhamento: 360
        },
        cidade: {
            TAM_FONT: 12 * Multiplicador,
            alignment: AlignmentType.CENTER,
            bold: true,
            entrelinhamento: 360
        },
        ano: {
            TAM_FONT: 12 * Multiplicador,
            alignment: AlignmentType.CENTER,
            bold: true,
            entrelinhamento: 360
        }
    },

    sumario: {
        titulo: {
            TAM_FONT: 12 * Multiplicador,
            alignment: AlignmentType.CENTER,
            bold: true,
            entrelinhamento: 360
        },
        capitulos: {
            TAM_FONT: 12 * Multiplicador,
            bold: true,
            entrelinhamento: 360,
            alignment: AlignmentType.LEFT
        }
    },

    section: {
        subtitulo: {
            TAM_FONT: 12 * Multiplicador,
            bold: true,
            alignment: AlignmentType.LEFT
        },
        conteudo: {
            TAM_FONT: 12 * Multiplicador,
            bold: false,
            entrelinhamento: 360,
            alignment: AlignmentType.JUSTIFIED
            
        }
    },

    referencias: {
        titulo: {
            TAM_FONT: 12 * Multiplicador,
            bold: true,
            entrelinhamento: 360,
            alignment: AlignmentType.CENTER
        },
        conteudo: {
            alignment: AlignmentType.LEFT
        }
    }

    

}