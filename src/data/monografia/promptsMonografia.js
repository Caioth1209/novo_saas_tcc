export default [
    {
        key: "introducao",
        get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
            return `A monografia que você escreverá será para a area de ${areaEstudo}, com o tema "${tema}", sendo o objetivo da monografia  ${objetivo} e com a pergunta da monografia sendo: "${perguntaPesquisa}".
            Esta primeira parte da introdução, você deve introduzir o tema do TCC, apresentando o contexto geral em que ele se insere. Aqui, você deve discorrer sobre a importância do tema escolhido, justificando por que ele é relevante tanto para a comunidade acadêmica quanto para a sociedade em geral, ou para o campo específico de estudo. Este segmento pode incluir uma breve discussão sobre o cenário atual da área de pesquisa e como o seu trabalho se encaixa nesse contexto. ORGANIZE o texto da seguinte forma: Usando \\n entre cada parágrafo do texto. Escreva apenas o conteúdo e não faça comentários sobre o conteúdo.`
        },
        hasReferences: false,
        isContinuation: false
    },
    {
        key: "introducao2",
        get: () => {
            return `Esta segunda parte da introdução, você deve especificar claramente o problema de pesquisa que o seu TCC pretende abordar e os seus objetivos principais. ORGANIZE o texto da seguinte forma: Usando \\n entre cada parágrafo do texto. Escreva apenas o conteúdo e não faça comentários sobre o conteúdo.`
        },
        hasReferences: false,
        isContinuation: true
    },
    {
        key: "introducao3",
        get: () => {
            return `Esta terceira parte da introdução, desenvolva uma justificativa mais aprofundada para o estudo. ORGANIZE o texto da seguinte forma: Usando \\n entre cada parágrafo do texto. Escreva apenas o conteúdo e não faça comentários sobre o conteúdo.`
        },
        hasReferences: false,
        isContinuation: true
    },
    {
        key: "revisaoLiteratura",
        get: () => {
            return `Agora, elabore a primeira parte da revisão da literatura desse trabalho, focando na Contextualização Teórica e Fundamentação Conceitual. ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Usando \\r antes da seção de referências bibliográficas.
            Usando \\n entre cada referência bibliográfica. 
            Escreva apenas o conteúdo e não faça comentários sobre o conteúdo.`;
        },
        hasReferences: true,
        isContinuation: false
    },
    {
        key: "revisaoLiteratura2",
        get: () => {
            return `Agora, elabore a segunda parte da revisão da literatura desse trabalho, focando na Síntese da Pesquisa Relacionada, fazendo uma análise crítica das pesquisas anteriores relacionadas ao tema. ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Usando \\r antes da seção de referências bibliográficas.
            Usando \\n entre cada referência bibliográfica. 
            Escreva apenas o conteúdo e não faça comentários sobre o conteúdo.`;
        },
        hasReferences: true,
        isContinuation: true
    },
    {
        key: "revisaoLiteratura3",
        get: () => {
            return `Agora, elabore a terceira parte da revisão da literatura desse trabalho, focando na Identificação de Lacunas e Justificativa para o Estudo Atual. ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Usando \\r antes da seção de referências bibliográficas.
            Usando \\n entre cada referência bibliográfica. 
            Escreva apenas o conteúdo e não faça comentários sobre o conteúdo.`;
        },
        hasReferences: true,
        isContinuation: true
    },
    {
        key: "metodologia",
        get: () => {
            return `Agora, descreva a primeira parte da metodologia desta monografia, focando no design da pesquisa.  ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Usando \\r antes da seção de referências bibliográficas.
            Usando \\n entre cada referência bibliográfica. 
            Escreva apenas o conteúdo e não faça comentários sobre o conteúdo.`;
        },
        hasReferences: true,
        isContinuation: false
    },
    {
        key: "metodologia2",
        get: () => {
            return `Agora, descreva a segunda parte da metodologia desta monografia, focando nos participantes do estudo ou na descrição dos dados. ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Escreva apenas o conteúdo e não faça comentários sobre o conteúdo.`;
        },
        hasReferences: false,
        isContinuation: true
    },
    {
        key: "metodologia3",
        get: () => {
            return `Agora, descreva a terceira parte da metodologia desta monografia, focando na coleta dos dados. ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Escreva apenas o conteúdo e não faça comentários sobre o conteúdo.`;
        },
        hasReferences: false,
        isContinuation: true
    },
    {
        key: "metodologia4",
        get: () => {
            return `Agora, descreva a quarta parte da metodologia desta monografia, focando em como os dados foram analisados. ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Escreva apenas o conteúdo e não faça comentários sobre o conteúdo.`;
        },
        hasReferences: false,
        isContinuation: true
    },
    {
        key: "resultados",
        get: () => {
            return `Agora, na primeira parte dos resultados obtidos com base na metodologia, foque na apresentação dos dados. 
            ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Usando \\r antes da seção de referências bibliográficas.
            Usando \\n entre cada referência bibliográfica.
            Escreva apenas o conteúdo e não faça comentários sobre o conteúdo.`;
        },
        hasReferences: true,
        isContinuation: false
    },
    {
        key: "resultados2",
        get: () => {
            return `Agora, na segunda parte dos resultados, foque na Análise Detalhada dos Resultados.
            ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Usando \\r antes da seção de referências bibliográficas.
            Usando \\n entre cada referência bibliográfica.
            Escreva apenas o conteúdo e não faça comentários sobre o conteúdo.`;
        },
        hasReferences: true,
        isContinuation: true
    },
    {
        key: "resultados3",
        get: () => {
            return `Agora, na terceira parte dos resultados, foque na Síntese dos Principais Achados.
            ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Usando \\r antes da seção de referências bibliográficas.
            Usando \\n entre cada referência bibliográfica.
            Escreva apenas o conteúdo e não faça comentários sobre o conteúdo.`;
        },
        hasReferences: true,
        isContinuation: true
    },
    {
        key: "discussao",
        get: () => {
            return `Agora, escreva uma primeira parte da discussão com base nesses resultados, focando na Interpretação dos Resultados.
            ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Escreva apenas o conteúdo e não faça comentários sobre o conteúdo.`;
        },
        hasReferences: false,
        isContinuation: false
    },
    {
        key: "discussao2",
        get: () => {
            return `Agora, escreva a segunda parte da discussão, focando na Comparação com Estudos Anteriores.
            ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Escreva apenas o conteúdo e não faça comentários sobre o conteúdo.`;
        },
        hasReferences: false,
        isContinuation: true
    },
    {
        key: "discussao3",
        get: () => {
            return `Agora, escreva a terceira parte da discussão, destacando as implicações práticas, teóricas e metodológicas dos seus achados.
            ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Escreva apenas o conteúdo e não faça comentários sobre o conteúdo.`;
        },
        hasReferences: false,
        isContinuation: true
    },
    {
        key: "conclusao",
        get: () => {
            return `Agora, escreva a primeira parte da conclusão da monografia, a partir de todo o estudo realizado, focando na Síntese dos Principais Achados. 
            ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Escreva apenas o conteúdo e não faça comentários sobre o conteúdo.`;
        },
        hasReferences: false,
        isContinuation: false
    },
    {
        key: "conclusao2",
        get: () => {
            return `Agora, escreva a segunda parte da conclusão, focando nas implicações teóricas, práticas, e/ou pedagógicas dos seus achados. 
            ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Escreva apenas o conteúdo e não faça comentários sobre o conteúdo.`;
        },
        hasReferences: false,
        isContinuation: true
    },
    {
        key: "conclusao3",
        get: () => {
            return `Agora, escreva a terceira parte da conclusão, focando Limitações do seu estudo e Sugestões para Pesquisas Futuras. 
            ORGANIZE o texto da seguinte forma:
            Usando \\n entre cada parágrafo do texto.
            Escreva apenas o conteúdo e não faça comentários sobre o conteúdo.`;
        },
        hasReferences: false,
        isContinuation: true
    },
    {
        key: "resumo",
        get: () => {
          return  `Agora escreva um resumo para a monografia a partir de todo o estudo realizado. 
          ORGANIZE o texto da seguinte forma:
          Usando \\n entre cada parágrafo do texto.
          Escreva apenas o conteúdo e não faça comentários sobre o conteúdo.`
        },
        hasReferences: false,
        isContinuation: false
      },
]