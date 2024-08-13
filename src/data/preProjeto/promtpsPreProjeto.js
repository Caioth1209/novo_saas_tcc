export default [
    {
        key: "resumo",
        get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
            return `
                Area: ${areaEstudo}
                Tema: ${tema}
                Objetivo: ${objetivo}
                Pergunta de pesquisa: ${perguntaPesquisa}

                Esta primeira parte da justificativa, você deve introduzir o tema do Pré projeto, apresentando o contexto geral em que ele se insere. Aqui, você deve discorrer sobre a importância do tema escolhido, justificando por que ele é relevante tanto para a comunidade acadêmica quanto para a sociedade em geral, ou para o campo específico de estudo. Este segmento pode incluir uma breve discussão sobre o cenário atual da área de pesquisa e como o seu trabalho se encaixa nesse contexto. ORGANIZE o texto da seguinte forma: Usando \\n entre cada parágrafo do texto. Escreva apenas o conteúdo e não faça comentários sobre o conteúdo.
            `
        },
        hasReferences: false,
        isContinuation: false
    },
    {
        key: "resumo2",
        get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
            return `
            escreva a continuação da justificativa de um Trabalho de conclusão de curso na área de ${areaEstudo} com o tema ${tema}, abordando o objetivo ${objetivo} e a pergunta de pesquisa "${perguntaPesquisa}", incluindo citações pertinentes ao decorrer do texto e adicione as referências biliográficas reais referentes às citações ao final. Dê preferência a referencias que sejam o mais recentes possíveis.
            ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Usando \\r antes da seção de referências bibliográficas.
            Usando \\n entre cada referência bibliográfica.
            `
        },
        hasReferences: true,
        isContinuation: true
    },
    {
        key: "introducao",
        get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
            return `
            Esta primeira parte do Referencial Teórico de um Pre Projeto na área de ${areaEstudo} com o tema ${tema}, abordando o objetivo ${objetivo} e a pergunta de pesquisa "${perguntaPesquisa}", incluindo citações pertinentes ao decorrer do texto e adicione as referências biliográficas reais referentes às citações ao final. Dê preferência a referencias que sejam o mais recentes possíveis.
            ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Usando \\r antes da seção de referências bibliográficas.
            Usando \\n entre cada referência bibliográfica.
            `
        },
        hasReferences: true,
        isContinuation: false
    },
    {
        key: "introducao2",
        get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
            return `
            Escreva a continuação do Referencial Teórico de um Pre Projeto na área de ${areaEstudo} com o tema ${tema}, abordando o objetivo ${objetivo} e a pergunta de pesquisa "${perguntaPesquisa}", incluindo citações pertinentes ao decorrer do texto e adicione as referências biliográficas reais referentes às citações ao final. Dê preferência a referencias que sejam o mais recentes possíveis.
            ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Usando \\r antes da seção de referências bibliográficas.
            Usando \\n entre cada referência bibliográfica.
            `
        },
        hasReferences: true,
        isContinuation: true
    },
    {
        key: "revisaoLiteratura",
        get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
            return `
            Esta primeira parte da Delimitação do problema de um Pre Projeto na área de ${areaEstudo} com o tema ${tema}, abordando o objetivo ${objetivo} e a pergunta de pesquisa "${perguntaPesquisa}", incluindo citações pertinentes ao decorrer do texto e adicione as referências biliográficas reais referentes às citações ao final. Dê preferência a referencias que sejam o mais recentes possíveis.
            ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Usando \\r antes da seção de referências bibliográficas.
            Usando \\n entre cada referência bibliográfica.
            `
        },
        hasReferences: true,
        isContinuation: false
    },
    {
        key: "revisaoLiteratura2",
        get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
            return `
            Escreva a continuação da delimitação do problema de um Pre Projeto na área de ${areaEstudo} com o tema ${tema}, abordando o objetivo ${objetivo} e a pergunta de pesquisa "${perguntaPesquisa}", incluindo citações pertinentes ao decorrer do texto e adicione as referências biliográficas reais referentes às citações ao final. Dê preferência a referencias que sejam o mais recentes possíveis.
            ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Usando \\r antes da seção de referências bibliográficas.
            Usando \\n entre cada referência bibliográfica.
            `
        },
        hasReferences: true,
        isContinuation: true
    },
    {
        key: "metodologia",
        get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
            return `
            Esta primeira parte da Hipotese de um Pre Projeto na área de ${areaEstudo} com o tema ${tema}, abordando o objetivo ${objetivo} e a pergunta de pesquisa "${perguntaPesquisa}", incluindo citações pertinentes ao decorrer do texto e adicione as referências biliográficas reais referentes às citações ao final. Dê preferência a referencias que sejam o mais recentes possíveis.
            ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Usando \\r antes da seção de referências bibliográficas.
            Usando \\n entre cada referência bibliográfica.
            `
        },
        hasReferences: true,
        isContinuation: false
    },
    {
        key: "metodologia2",
        get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
            return `
            Escreva a continuação da Hipotese de um Pre Projeto na área de ${areaEstudo} com o tema ${tema}, abordando o objetivo ${objetivo} e a pergunta de pesquisa "${perguntaPesquisa}", incluindo citações pertinentes ao decorrer do texto e adicione as referências biliográficas reais referentes às citações ao final. Dê preferência a referencias que sejam o mais recentes possíveis.
            ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Usando \\r antes da seção de referências bibliográficas.
            Usando \\n entre cada referência bibliográfica.
            `
        },
        hasReferences: true,
        isContinuation: true
    },
    {
        key: "resultados",
        get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
            return `
            Esta primeira parte dos Objetivos de um Pre Projeto na área de ${areaEstudo} com o tema ${tema}, abordando o objetivo ${objetivo} e a pergunta de pesquisa "${perguntaPesquisa}", incluindo citações pertinentes ao decorrer do texto e adicione as referências biliográficas reais referentes às citações ao final. Dê preferência a referencias que sejam o mais recentes possíveis.
            ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Usando \\r antes da seção de referências bibliográficas.
            Usando \\n entre cada referência bibliográfica.
            `
        },
        hasReferences: true,
        isContinuation: false
    },
    {
        key: "resultados2",
        get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
            return `
            Escreva a continuação dos Objetivos de um Pre Projeto na área de ${areaEstudo} com o tema ${tema}, abordando o objetivo ${objetivo} e a pergunta de pesquisa "${perguntaPesquisa}", incluindo citações pertinentes ao decorrer do texto e adicione as referências biliográficas reais referentes às citações ao final. Dê preferência a referencias que sejam o mais recentes possíveis.
            ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Usando \\r antes da seção de referências bibliográficas.
            Usando \\n entre cada referência bibliográfica.
            `
        },
        hasReferences: true,
        isContinuation: true
    },
    {
        key: "discussao",
        get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
            return `
            Esta primeira parte das Metodologias de um Pre Projeto na área de ${areaEstudo} com o tema ${tema}, abordando o objetivo ${objetivo} e a pergunta de pesquisa "${perguntaPesquisa}", incluindo citações pertinentes ao decorrer do texto e adicione as referências biliográficas reais referentes às citações ao final. Dê preferência a referencias que sejam o mais recentes possíveis.
            ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Usando \\r antes da seção de referências bibliográficas.
            Usando \\n entre cada referência bibliográfica.
            `
        },
        hasReferences: true,
        isContinuation: false
    },
    {
        key: "discussao2",
        get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
            return `
            Escreva a continuação das Metodologias de um Pre Projeto na área de ${areaEstudo} com o tema ${tema}, abordando o objetivo ${objetivo} e a pergunta de pesquisa "${perguntaPesquisa}", incluindo citações pertinentes ao decorrer do texto e adicione as referências biliográficas reais referentes às citações ao final. Dê preferência a referencias que sejam o mais recentes possíveis.
            ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Usando \\r antes da seção de referências bibliográficas.
            Usando \\n entre cada referência bibliográfica.
            `
        },
        hasReferences: true,
        isContinuation: true
    },
    {
        key: "conclusao",
        get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
            return `
            Esta primeira parte das Metodologias de um Pre Projeto na área de ${areaEstudo} com o tema ${tema}, abordando o objetivo ${objetivo} e a pergunta de pesquisa "${perguntaPesquisa}".
            ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            `
        },
        hasReferences: false,
        isContinuation: true
    },
]
