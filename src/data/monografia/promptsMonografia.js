/* eslint-disable no-unused-vars */
export default [
    {
        key: "resumo",
        get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
            return `Escreva o resumo, em um único parágrafo, que será a porta de entrada de um Trabalho de conclusão de curso na área de ${areaEstudo} com o tema ${tema}, abordando o objetivo ${objetivo} e a pergunta de pesquisa ${perguntaPesquisa}. Em um paragrafo separado, me de as palavras chaves do trabalho, Use o delimitador [--] para separar o parágrafo do resumo`
        },
        hasReferences: false,
        isContinuation: false
    },
    {
        key: "introducao",
        get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
            return `Você é um redator acadêmico especializado em formatação de Trabalhos de Conclusão de Curso (TCC). Sua tarefa é escrever a **PRIMEIRA PARTE** introdução de um TCC na área de ${areaEstudo} com o tema ${tema}, abordando de forma clara e estruturada o objetivo ${objetivo} e a pergunta de pesquisa ${perguntaPesquisa}. Não faça a conclusão desta sessão, pois esla será feita em outro momento. Durante a introdução, você deve integrar pelo menos três citações de trabalhos relevantes, sempre fazendo uso de referências bibliográficas reais, preferencialmente recentes, e provenientes do arquivo anexado. As referências devem incluir o nome do autor, o título do trabalho e o link de acesso, conforme disponível no arquivo.

            Siga as seguintes diretrizes para a redação:

            Estruture o texto em pelo menos cinco parágrafos com no mínimo 1000 caracteres no total.
            Use o delimitador [--] para separar cada parágrafo da introdução.
            Inclua a seção de referências bibliográficas ao final, antecedida pelo marcador [r].
            Insira as referências, separando-as com [--] entre cada uma.
            Lembre-se: é obrigatório fazer pelo menos três citaçoes, contento o nome do autor e o ano do seu trabalho, no decorrer do texto e essas citações devem ter como base o arquivo anexado, se não hover citaçoes interessantes no arquivo, sempre pesquise na internet artigos REAIS que fundamentem o trabalho.
            A escrita deve ser formal, acadêmica e seguir as normas de citação adequadas, com uma abordagem coerente e direta ao tratar o tema, objetivo e pergunta de pesquisa.
            
            Orientações de linguagem e estilo:  
            - Escreva com um tom acadêmico, mas fluido e natural, como se estivesse explicando para um leitor envolvido com o tema.  
            - Estruture as ideias de forma coesa, conectando cada ponto com transições suaves e respostas diretas à pergunta de pesquisa.  
            - Evite repetições e termos excessivamente técnicos ou robóticos; priorize clareza e objetividade.

            `
        },
        hasReferences: true,
        isContinuation: false
    },
    {
        key: "introducao2",
        get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
            return `De continuidade a introdução, fazendo agora a conclusão da mesma. 
        IMPORTANTE: Continue seguindo todas as diretrizes previamente ditas`
        },
        hasReferences: true,
        isContinuation: true
    },
    {
        key: "revisaoLiteratura",
        get: (tema) => {
            return `Você é um redator acadêmico especializado em elaborar revisões de literatura para Trabalhos de Conclusão de Curso (TCC). Sua tarefa é redigir a **PRIMEIRA PARTE** de uma revisão de literatura detalhada sobre o tema ${tema}. Não faça a conclusão desta sessão, pois esla será feita em outro momento. Ao longo da revisão, você deve incluir citações pertinentes retiradas de fontes confiáveis e reais, com prioridade para referências recentes fornecidas no arquivo anexado. As referências bibliográficas devem conter o nome do autor, título do trabalho e o link de acesso.

            Para a estrutura da revisão de literatura:

            O texto deve ser organizado em no mínimo oito parágrafos, totalizando ao menos 2000 caracteres.
            Separe cada parágrafo do texto com o delimitador [--].
            A seção de referências bibliográficas deve ser inserida ao final do texto e precedida pelo marcador [r].
            Use [--] para separar cada referência bibliográfica.
            Lembre-se: é obrigatório fazer pelo menos 8 (oito) citações, contento o nome do autor e o ano do seu trabalho, no decorrer do texto e essas citações devem  ter como base o arquivo anexado, se não hover citaçoes interessantes no arquivo, sempre pesquise na internet artigos REAIS que fundamentem o trabalho.
            Certifique-se de que a redação siga uma estrutura lógica e coerente, com uma linguagem formal e acadêmica. As citações devem ser integradas de maneira fluida, com o objetivo de consolidar o embasamento teórico da pesquisa, sempre seguindo as normas de citação.
            
            Orientações de linguagem e estilo:  
            - Escreva com um tom acadêmico, mas fluido e natural, como se estivesse explicando para um leitor envolvido com o tema.  
            - Estruture as ideias de forma coesa, conectando cada ponto com transições suaves e respostas diretas à pergunta de pesquisa.  
            - Evite repetições e termos excessivamente técnicos ou robóticos; priorize clareza e objetividade.

            `;
        },
        hasReferences: true,
        isContinuation: false
    },
    {
        key: "revisaoLiteratura2",
        get: (tema) => {
            return `De continuidade a revisão de literatura, fazendo agora a conclusão da mesma. 
        IMPORTANTE: Continue seguindo todas as diretrizes previamente ditas`;
        },
        hasReferences: true,
        isContinuation: true
    },
    {
        key: "metodologia",
        get: (tema, x, objetivo) => {
            return `Você é um redator acadêmico especializado em redação de Trabalhos de Conclusão de Curso (TCC). Sua tarefa é descrever detalhadamente a primeira parte da metodologia que será utilizada para abordar o tema ${tema} e alcançar o objetivo ${objetivo}. A descrição deve abranger as seguintes etapas da pesquisa:

            A abordagem de pesquisa que será adotada (qualitativa, quantitativa, mista, etc.), justificando sua adequação ao estudo.
            Os métodos de amostragem, explicando como os participantes ou dados serão selecionados e qual será o tamanho da amostra.
            Os procedimentos de coleta de dados, especificando as ferramentas ou técnicas que serão utilizadas (entrevistas, questionários, observações, etc.).
            A estratégia de análise de dados, detalhando como os dados serão processados, interpretados e organizados.
            Ao longo da descrição, inclua citações pertinentes de trabalhos acadêmicos para fortalecer a argumentação, dando preferência a referências bibliográficas recentes fornecidas no arquivo anexado. As referências devem incluir o nome do autor, título do trabalho e o link de acesso.

            Para a organização da metodologia:

            Estruture o texto em no mínimo oito parágrafos, com um total de pelo menos 2000 caracteres.
            Utilize o delimitador [--] para separar cada parágrafo.
            A seção de referências bibliográficas deve ser adicionada ao final do texto, precedida pelo marcador [r].
            Separe as referências entre si utilizando [--].
            É obrigatório fazer citações ao longo do texto, contento o nome do autor e o ano do seu trabalho, sendo elas extraídas exclusivamente do arquivo anexado.
            Garanta que a redação mantenha um tom formal e acadêmico, seguindo as normas de citação. A metodologia deve ser descrita de maneira clara, justificada e detalhada, de modo a permitir uma compreensão completa do processo de pesquisa.

            Orientações de linguagem e estilo:  
            - Escreva com um tom acadêmico, mas fluido e natural, como se estivesse explicando para um leitor envolvido com o tema.  
            - Estruture as ideias de forma coesa, conectando cada ponto com transições suaves e respostas diretas à pergunta de pesquisa.  
            - Evite repetições e termos excessivamente técnicos ou robóticos; priorize clareza e objetividade.
            
            PS: Essa é a primeira parte da metodologia, a continuação será solicitada posteriormente.
            `;
        },
        hasReferences: true,
        isContinuation: false
    },
    {
        key: "metodologia2",
        get: (tema, x, objetivo) => {
            return `De continuidade a metodologia, fazendo agora a conclusão da mesma. 
        IMPORTANTE: Continue seguindo todas as diretrizes previamente ditas`;
        },
        hasReferences: true,
        isContinuation: true
    },
    {
        key: "resultados",
        get: (tema) => {
            return `Você é um redator acadêmico especializado em apresentação de resultados de pesquisas para Trabalhos de Conclusão de Curso (TCC). Sua tarefa é apresentar os resultados obtidos com base na metodologia aplicada ao tema ${tema}. A apresentação dos resultados deve ser clara e organizada, com uma análise detalhada dos dados coletados.

            As diretrizes para a redação incluem:

            Descrever os principais achados da pesquisa, com base nos dados obtidos e na metodologia previamente explicada.
            Incluir uma análise crítica dos resultados, destacando padrões, tendências, ou insights relevantes.
            Integrar citações pertinentes ao longo do texto, dando suporte às suas interpretações e comparando os resultados com a literatura existente. As citações devem ser retiradas exclusivamente do arquivo anexado.
            Priorize o uso de referências bibliográficas recentes, e ao citá-las, inclua o nome do autor, título do trabalho e link de acesso.
            Para a estrutura dos resultados:

            O texto deve conter no mínimo cinco parágrafos, com um total de pelo menos 1000 caracteres.
            Utilize o delimitador [--] para separar cada parágrafo.
            Inclua a seção de referências bibliográficas no final, antecedida pelo marcador [r].
            Separe as referências com o marcador [--].
            É obrigatório fazer no mínimo 4 (quatro) citações, contento o nome do autor e o ano do seu trabalho, ao longo do texto, sendo estas extraídas exclusivamente do arquivo anexado.
            Garanta que o texto siga uma estrutura formal e acadêmica, com uma explicação clara dos resultados e sua relevância para o tema abordado. As referências devem ser integradas ao texto de forma fluida, respeitando as normas acadêmicas.

            Orientações de linguagem e estilo:  
            - Escreva com um tom acadêmico, mas fluido e natural, como se estivesse explicando para um leitor envolvido com o tema.  
            - Estruture as ideias de forma coesa, conectando cada ponto com transições suaves e respostas diretas à pergunta de pesquisa.  
            - Evite repetições e termos excessivamente técnicos ou robóticos; priorize clareza e objetividade.
            
            PS: Essa é a primeira parte dos resultados, a continuação será solicitada posteriormente.
            `;
        },
        hasReferences: true,
        isContinuation: false
    },
    {
        key: "resultados2",
        get: (tema) => {
            return `De continuidade aos resultados, fazendo agora a conclusão da mesma. 
        IMPORTANTE: Continue seguindo todas as diretrizes previamente ditas`;
        },
        hasReferences: true,
        isContinuation: true
    },
    {
        key: "discussao",
        get: (tema) => {
            return `Você é um redator acadêmico especializado em redação de Trabalhos de Conclusão de Curso (TCC). Sua tarefa é elaborar o inicio de uma discussão detalhada sobre os resultados obtidos para o tema ${tema}. A discussão deve:

            Relacionar os resultados obtidos com a revisão da literatura, demonstrando como os achados corroboram ou divergem das teorias e estudos prévios.
            Explicar as implicações dos resultados para a área de estudo, destacando sua relevância.
            Discutir a importância dos achados, com foco no que eles acrescentam ao tema investigado.
            Durante o texto, você deve inserir citações pertinentes, retiradas exclusivamente do arquivo anexado, para reforçar sua análise. As referências devem incluir o nome do autor, título do trabalho e o link de acesso.

            Para a estrutura da discussão:

            O texto deve conter no mínimo cinco parágrafos, com um total de pelo menos 1000 caracteres.
            Utilize o delimitador [--] para separar cada parágrafo.
            Inclua a seção de referências bibliográficas ao final, precedida pelo marcador [r].
            Separe as referências entre si com o marcador [--].
            É obrigatório fazer no minimo 3 (três) citações, contento o nome do autor e o ano do seu trabalho, ao longo do texto, sendo elas retiradas exclusivamente do arquivo anexado.
            Certifique-se de que o texto siga uma lógica clara e coerente, mantendo a formalidade acadêmica. As citações devem ser integradas de forma fluida, relacionando os resultados da pesquisa à literatura existente e destacando a importância dos achados para o campo de estudo.

            Orientações de linguagem e estilo:  
            - Escreva com um tom acadêmico, mas fluido e natural, como se estivesse explicando para um leitor envolvido com o tema.  
            - Estruture as ideias de forma coesa, conectando cada ponto com transições suaves e respostas diretas à pergunta de pesquisa.  
            - Evite repetições e termos excessivamente técnicos ou robóticos; priorize clareza e objetividade.
            
            PS: Essa é a primeira parte da discussão, a continuação será solicitada posteriormente.
            `;
        },
        hasReferences: true,
        isContinuation: false
    },
    {
        key: "discussao2",
        get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
            return `
          De continuidade a discussão do trabalho, ainda não faça a conclusão, apenas de continuidade sem concluir. 
          IMPORTANTE: Continue seguindo todas as diretrizes previamente ditas 
          `
        },
        hasReferences: true,
        isContinuation: true
    },
    {
        key: "discussao3",
        get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
            return `
          De continuidade a discussão do trabalho, fazendo agora a conclusão da mesma. 
          IMPORTANTE: Continue seguindo todas as diretrizes previamente ditas
          `
        },
        hasReferences: true,
        isContinuation: true
    },
    {
        key: "conclusao",
        get: (tema) => {
            return `Você é um redator acadêmico especializado em redação de Trabalhos de Conclusão de Curso (TCC). Sua tarefa é elaborar o inicio de uma conclusão para o TCC sobre o tema ${tema}. A conclusão deve:

            Resumir os principais resultados obtidos ao longo da pesquisa, destacando os achados mais relevantes.
            Explicar as implicações desses resultados para a área de estudo, considerando a relevância dos dados apresentados.
            Destacar a importância dos achados, relacionando-os com os objetivos iniciais e a pergunta de pesquisa.
            Durante o texto, inclua citações pertinentes retiradas exclusivamente do arquivo anexado para reforçar sua análise. As referências devem conter o nome do autor, título do trabalho e o link de acesso.

            Para a estrutura da conclusão:

            O texto deve conter no mínimo cinco parágrafos, com um total de pelo menos 1000 caracteres.
            Utilize o delimitador [--] para separar cada parágrafo.
            Adicione a seção de referências bibliográficas ao final do texto, precedida pelo marcador [r].
            Separe as referências entre si utilizando [--].
            É obrigatório fazer no mínimo 3 (três) citações, contento o nome do autor e o ano do seu trabalho, ao longo do texto, retiradas exclusivamente do arquivo anexado.
            Certifique-se de que a conclusão seja clara e objetiva, respondendo à pergunta de pesquisa e finalizando a redação de forma coesa, com uma linguagem formal e acadêmica. As citações devem ser integradas de forma fluida e natural, consolidando os resultados da pesquisa e suas contribuições para o tema

            Orientações de linguagem e estilo:  
            - Escreva com um tom acadêmico, mas fluido e natural, como se estivesse explicando para um leitor envolvido com o tema.  
            - Estruture as ideias de forma coesa, conectando cada ponto com transições suaves e respostas diretas à pergunta de pesquisa.  
            - Evite repetições e termos excessivamente técnicos ou robóticos; priorize clareza e objetividade. 
            
            PS: Essa é a primeira parte da conclusão, a continuação será solicitada posteriormente.
            `;
        },
        hasReferences: true,
        isContinuation: false
    },
    {
        key: "conclusao2",
        get: (tema) => {
            return `De continuidade a conclusão do trabalho, fazendo agora a conclusão da mesma. 
      IMPORTANTE: Continue seguindo todas as diretrizes previamente ditas
            `;
        },
        hasReferences: true,
        isContinuation: true
    },
]