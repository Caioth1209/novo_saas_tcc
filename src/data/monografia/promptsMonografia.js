export default [
    {
        key: "resumo",
        get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
            return `Escreva o resumo, que será a porta de entrada de um Trabalho de conclusão de curso na área de ${areaEstudo} com o tema ${tema}, abordando o objetivo ${objetivo} e a pergunta de pesquisa ${perguntaPesquisa}. ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.`
        },
        hasReferences: false,
        isContinuation: false
    },
    {
        key: "introducao",
        get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
            return `Escreva a introdução de um Trabalho de conclusão de curso na área de ${areaEstudo} com o tema ${tema}, abordando o objetivo ${objetivo} e a pergunta de pesquisa ${perguntaPesquisa}, incluindo citações pertinentes ao decorrer do texto e adicione as referências biliográficas reais referentes às citações ao final. Dê preferência a referencias que sejam o mais recentes possíveis. ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Usando \\r antes da seção de referências bibliográficas.
            Usando \\n entre cada referência bibliográfica.
            IMPORTANTE: SEMPRE cite as refencias no do texto.`
        },
        hasReferences: true,
        isContinuation: false
    },
    {
        key: "introducao2",
        get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
            return `Escreva a continuação da introdução de um Trabalho de conclusão de curso na área de ${areaEstudo} com o tema ${tema}, abordando o objetivo ${objetivo} e a pergunta de pesquisa ${perguntaPesquisa}, incluindo citações pertinentes ao decorrer do texto e adicione as referências biliográficas reais referentes às citações ao final. Dê preferência a referencias que sejam o mais recentes possíveis.
         . ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Usando \\r antes da seção de referências bibliográficas.
            Usando \\n entre cada referência bibliográfica.
            IMPORTANTE: SEMPRE cite as refencias no do texto.`
        },
        hasReferences: true,
        isContinuation: true
    },
    {
        key: "revisaoLiteratura",
        get: (tema) => {
            return `Elabore uma revisão da literatura de um Trabalho de conclusão de curso relacionada ao tema ${tema}, incluindo citações pertinentes ao decorrer do texto e adicione as referências biliográficas reais referentes às citações ao final. Dê preferência a referencias que sejam o mais recentes possíveis. ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Usando \\r antes da seção de referências bibliográficas.
            Usando \\n entre cada referência bibliográfica.
            IMPORTANTE: SEMPRE cite as refencias no do texto.`;
        },
        hasReferences: true,
        isContinuation: false
    },
    {
        key: "revisaoLiteratura2",
        get: (tema) => {
            return `Elabore a continuação da revisão da literatura de um Trabalho de conclusão de curso relacionada ao tema ${tema}, incluindo citações pertinentes ao decorrer do texto e adicione as referências biliográficas reais referentes às citações ao final. Dê preferência a referencias que sejam o mais recentes possíveis. ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Usando \\r antes da seção de referências bibliográficas.
            Usando \\n entre cada referência bibliográfica.
            IMPORTANTE: SEMPRE cite as refencias no do texto.`;
        },
        hasReferences: true,
        isContinuation: true
    },
    {
        key: "revisaoLiteratura3",
        get: (tema) => {
            return `Elabore a continuação da revisão da literatura de um Trabalho de conclusão de curso relacionada ao tema ${tema}, incluindo citações pertinentes ao decorrer do texto e adicione as referências biliográficas reais referentes às citações ao final. Dê preferência a referencias que sejam o mais recentes possíveis. ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Usando \\r antes da seção de referências bibliográficas.
            Usando \\n entre cada referência bibliográfica.
            IMPORTANTE: SEMPRE cite as refencias no do texto.`;
        },
        hasReferences: true,
        isContinuation: true
    },
    {
        key: "metodologia",
        get: (tema, x, objetivo) => {
            return `Descreva a metodologia que será usada para abordar o tema ${tema} e alcançar o objetivo ${objetivo} de Trabalho de Conclusão de Curso. Inclua detalhes sobre a abordagem de pesquisa, amostragem, coleta de dados e análise de dados. incluindo citações pertinentes ao decorrer do texto e adicione as referências biliográficas reais referentes às citações ao final. Dê preferência a referencias que sejam o mais recentes possíveis. ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Usando \\r antes da seção de referências bibliográficas.
            Usando \\n entre cada referência bibliográfica.
            IMPORTANTE: SEMPRE cite as refencias no do texto.`;
        },
        hasReferences: true,
        isContinuation: false
    },
    {
        key: "resultados",
        get: (tema) => {
            return `Apresente os resultados obtidos com base na metodologia aplicada ao tema ${tema} para o Trabalho de Conclusão de Curso. Inclua informações detalhadas e análises sobre os dados coletados, incluindo citações pertinentes ao decorrer do texto e adicione as referências biliográficas reais referentes às citações ao final. Dê preferência a referencias que sejam o mais recentes possíveis. ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Usando \\r antes da seção de referências bibliográficas.
            Usando \\n entre cada referência bibliográfica.
            IMPORTANTE: SEMPRE cite as refencias no do texto.`;
        },
        hasReferences: true,
        isContinuation: false
    },
    {
        key: "resultados2",
        get: (tema) => {
            return `Apresente a continuação da parte dos resultados obtidos com base na metodologia aplicada ao tema ${tema} para o Trabalho de Conclusão de Curso. Inclua informações detalhadas e análises sobre os dados coletados, incluindo citações pertinentes ao decorrer do texto e adicione as referências biliográficas reais referentes às citações ao final. Dê preferência a referencias que sejam o mais recentes possíveis. ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Usando \\r antes da seção de referências bibliográficas.
            Usando \\n entre cada referência bibliográfica.
            IMPORTANTE: SEMPRE cite as refencias no do texto.`;
        },
        hasReferences: true,
        isContinuation: true
    },
    {
        key: "resultados3",
        get: (tema) => {
            return `Apresente a continuação da parte dos resultados obtidos com base na metodologia aplicada ao tema ${tema} para o Trabalho de Conclusão de Curso. Inclua informações detalhadas e análises sobre os dados coletados, incluindo citações pertinentes ao decorrer do texto e adicione as referências biliográficas reais referentes às citações ao final. Dê preferência a referencias que sejam o mais recentes possíveis. ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Usando \\r antes da seção de referências bibliográficas.
            Usando \\n entre cada referência bibliográfica.
            IMPORTANTE: SEMPRE cite as refencias no do texto.`;
        },
        hasReferences: true,
        isContinuation: true
    },
    {
        key: "discussao",
        get: (tema) => {
            return `Elabore uma discussão detalhada sobre os resultados obtidos para o tema ${tema} para o Trabalho de Conclusão de Curso. Relacione os resultados com a revisão da literatura sobre o tema e explique as implicações e importância dos achados incluindo citações pertinentes ao decorrer do texto e adicione as referências biliográficas reais referentes às citações ao final. Dê preferência a referencias que sejam o mais recentes possíveis. ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Usando \\r antes da seção de referências bibliográficas.
            Usando \\n entre cada referência bibliográfica.
            IMPORTANTE: SEMPRE cite as refencias no do texto.`;
        },
        hasReferences: true,
        isContinuation: false
    },
    {
        key: "discussao2",
        get: (tema) => {
            return `Elabore a continuação de uma discussão detalhada sobre os resultados obtidos para o tema ${tema} para o Trabalho de Conclusão de Curso. Relacione os resultados com a revisão da literatura sobre o tema e explique as implicações e importância dos achados incluindo citações pertinentes ao decorrer do texto e adicione as referências biliográficas reais referentes às citações ao final. Dê preferência a referencias que sejam o mais recentes possíveis. ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Usando \\r antes da seção de referências bibliográficas.
            Usando \\n entre cada referência bibliográfica.
            IMPORTANTE: SEMPRE cite as refencias no do texto.`;
        },
        hasReferences: true,
        isContinuation: true
    },
    {
        key: "discussao3",
        get: (tema) => {
            return `Elabore a continuação de uma discussão detalhada sobre os resultados obtidos para o tema ${tema} para o Trabalho de Conclusão de Curso. Relacione os resultados com a revisão da literatura sobre o tema e explique as implicações e importância dos achados incluindo citações pertinentes ao decorrer do texto e adicione as referências biliográficas reais referentes às citações ao final. Dê preferência a referencias que sejam o mais recentes possíveis. ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Usando \\r antes da seção de referências bibliográficas.
            Usando \\n entre cada referência bibliográfica.
            IMPORTANTE: SEMPRE cite as refencias no do texto.`;
        },
        hasReferences: true,
        isContinuation: true
    },
    {
        key: "conclusao",
        get: (tema) => {
            return `Elabore uma conclusão para o Trabalho de Conclusão de Curso sobre o tema ${tema}. Resuma os resultados obtidos e explique as implicações e importância dos achados. ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Usando \\r antes da seção de referências bibliográficas.
            Usando \\n entre cada referência bibliográfica.
            IMPORTANTE: SEMPRE cite as refencias no do texto.
            IMPORTANTE: SEMPRE use as referencias do arquivo anexado`;
        },
        hasReferences: true,
        isContinuation: false
    },
    {
        key: "conclusao2",
        get: (tema) => {
            return `Elabore a continuação de uma conclusão para o Trabalho de Conclusão de Curso sobre o tema ${tema}. Resuma os resultados obtidos e explique as implicações e importância dos achados incluindo citações pertinentes ao decorrer do texto e adicione as referências biliográficas reais referentes às citações ao final. Dê preferência a referencias que sejam o mais recentes possíveis. ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Usando \\r antes da seção de referências bibliográficas.
            Usando \\n entre cada referência bibliográfica.
            IMPORTANTE: SEMPRE cite as refencias no do texto.
            IMPORTANTE: SEMPRE use as referencias do arquivo anexado`;
        },
        hasReferences: true,
        isContinuation: true
    },
]