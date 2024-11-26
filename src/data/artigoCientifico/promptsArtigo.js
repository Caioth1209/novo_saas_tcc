/* eslint-disable no-unused-vars */
export default [

  {
    key: "resumo",
    get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
      return ` 
      Escreva o resumo, em um único parágrafo, que será a porta de entrada de um Artigo Científico na área de ${areaEstudo} com o tema ${tema}, abordando o objetivo ${objetivo} e a pergunta de pesquisa ${perguntaPesquisa}. Em um paragrafo separado, me de as palavras chaves do trabalho, Use o delimitador [--] para separar o parágrafo do resumo
      
      `
    },
    hasReferences: false,
    isContinuation: false
  },
  {
    key: "introducao",
    get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
      return `
        Você é um redator acadêmico especializado em formatação de Artigo Científico. Sua tarefa é escrever a PRIMEIRA PARTE da introdução de um Artigo Científico na área de ${areaEstudo} com o tema ${tema}, abordando de forma clara e estruturada o objetivo ${objetivo} e a pergunta de pesquisa ${perguntaPesquisa}. Durante a introdução, você deve integrar pelo menos três citações de trabalhos relevantes, sempre fazendo uso de referências bibliográficas reais, preferencialmente recentes, e provenientes do arquivo anexado. As referências devem incluir o nome do autor, o título do trabalho e o link de acesso, conforme disponível no arquivo.

        Siga as seguintes diretrizes para a redação:

            Voce deve escrever a PRIMEIRA PARTE da introdução. NÃO faça a conclusão dessa sessão. Isso será feito em outro momento 
            Estruture o texto em pelo menos oito parágrafos abordando aspectos fundamentais como a relevância do tema, a justificativa da pesquisa e a definição clara do objetivo e da pergunta de pesquisa, com no mínimo 1000 caracteres no total.
            Use o delimitador [--] para separar cada parágrafo da introdução.
            Inclua a seção de referências bibliográficas ao final, antecedida pelo marcador [r].
            Insira as referências, separando-as com [--] entre cada uma.
            Lembre-se: é obrigatório fazer pelo menos três citaçoes, contento o nome do autor e o ano do seu trabalho, no decorrer do texto e essas citações devem ter como base o arquivo anexado, se não hover citaçoes interessantes no arquivo, sempre pesquise na internet artigos REAIS que fundamentem o trabalho.
            A escrita deve ser formal, acadêmica e seguir as normas de citação adequadas, com uma abordagem coerente e direta ao tratar o tema, objetivo e pergunta de pesquisa.

        `
    },
    hasReferences: true,
    isContinuation: false
  },
  {
    key: "introducao2",
    get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
      return `   
        De continuidade a introdução, fazendo agora a conclusão da mesma. 
        IMPORTANTE: Continue seguindo todas as diretrizes previamente ditas
        `
    },
    hasReferences: true,
    isContinuation: true
  },
  {
    key: "desenvolvimento",
    get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
      return `
      Você é um redator acadêmico especializado em formatação de Artigo Científico. Sua tarefa é escrever detalhadamente a primeira parte do desenvolvimento que será utilizada para abordar o tema ${tema} e alcançar o objetivo ${objetivo}. A descrição deve abranger as seguintes etapas da pesquisa:

      A abordagem de pesquisa que será adotada (qualitativa, quantitativa, mista, etc.), justificando sua adequação ao estudo.
      Os métodos de amostragem, explicando como os participantes ou dados serão selecionados e qual será o tamanho da amostra.
      Os procedimentos de coleta de dados, especificando as ferramentas ou técnicas que serão utilizadas (entrevistas, questionários, observações, etc.).
      A estratégia de análise de dados, detalhando como os dados serão processados, interpretados e organizados.
      Ao longo da descrição, inclua citações pertinentes de trabalhos acadêmicos para fortalecer a argumentação, dando preferência a referências bibliográficas recentes fornecidas no arquivo anexado. As referências devem incluir o nome do autor, título do trabalho e o link de acesso.
      Apresentar e discutir os resultados da pesquisa de forma detalhada, explicando como cada um deles responde à pergunta de pesquisa (${perguntaPesquisa}) e ao objetivo (${objetivo}).
      Subdividir o texto em várias seções e subseções para garantir clareza e organização, facilitando a leitura e compreensão do conteúdo.
      Discutir as limitações da pesquisa de maneira crítica, explicando eventuais restrições metodológicas ou de amostragem que possam ter influenciado os resultados.
      Abordar as implicações dos achados**, tanto teóricas quanto práticas, destacando como esses resultados podem impactar a área de ${areaEstudo} e sugerindo possíveis aplicações ou caminhos futuros para pesquisa.


      Para a organização do desenvolvimento:

      Voce deve escrever a PRIMEIRA PARTE do desenvolvimento. NÃO faça a conclusão dessa sessão. Isso será feito em outro momento 
      Estruture o texto em no mínimo oito parágrafos, com um total de pelo menos 2000 caracteres.
      Utilize o delimitador [--] para separar cada parágrafo.
      A seção de referências bibliográficas deve ser adicionada ao final do texto, precedida pelo marcador [r].
      Separe as referências entre si utilizando [--].
      É obrigatório fazer citações ao longo do texto, contento o nome do autor e o ano do seu trabalho, sendo elas extraídas exclusivamente do arquivo anexado.
      Garanta que a redação mantenha um tom formal e acadêmico, seguindo as normas de citação. A metodologia deve ser descrita de maneira clara, justificada e detalhada, de modo a permitir uma compreensão completa do processo de pesquisa.
      
      PS: Essa é a primeira parte do desenvolvimento, a continuação será solicitada posteriormente.
      `
    },
    hasReferences: true,
    isContinuation: false
  },
  {
    key: "desenvolvimento2",
    get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
      return `
      De continuidade ao desenvolvimento do trabalho, fazendo agora a conclusão da mesma. 
        IMPORTANTE: Continue seguindo todas as diretrizes previamente ditas
      `
    },
    hasReferences: true,
    isContinuation: true
  },
  {
    key: "revisaoLiteratura",
    get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
      return `
      Você é um redator acadêmico especializado em elaborar revisões de literatura para Artigos Científicos. Sua tarefa é redigir a primeira parte de uma revisão de literatura detalhada sobre o tema ${tema}. Ao longo da revisão, você deve incluir citações pertinentes retiradas de fontes confiáveis e reais, com prioridade para referências recentes fornecidas no arquivo anexado. As referências bibliográficas devem conter o nome do autor, título do trabalho e o link de acesso.
        
      Explicar as teorias e estudos anteriores que estão relacionados ao tema da pesquisa, destacando as principais contribuições feitas até o momento.
      Comparar e contrastar os resultados de estudos anteriores com o seu, mostrando como o seu estudo se diferencia, expande ou complementa esses trabalhos.
      Identificar lacunas na literatura que justificam a realização da pesquisa, ou apontar aspectos não explorados ou pouco desenvolvidos nos estudos existentes.
      Contextualizar o seu estudo dentro do cenário acadêmico, mostrando como ele contribui para o avanço da área de ${areaEstudo}.

      Para a estrutura da revisão de literatura:

        Voce deve escrever a PRIMEIRA PARTE da revisão de literarua. NÃO faça a conclusão dessa sessão. Isso será feito em outro momento 
        O texto deve ser organizado em no mínimo oito parágrafos, totalizando ao menos 2000 caracteres.
        Separe cada parágrafo do texto com o delimitador [--].
        A seção de referências bibliográficas deve ser inserida ao final do texto e precedida pelo marcador [r].
        Use [--] para separar cada referência bibliográfica.
        Lembre-se: é obrigatório fazer pelo menos 8 (oito) citações, contento o nome do autor e o ano do seu trabalho, no decorrer do texto e essas citações devem  ter como base o arquivo anexado, se não hover citaçoes interessantes no arquivo, sempre pesquise na internet artigos REAIS que fundamentem o trabalho.
        Certifique-se de que a redação siga uma estrutura lógica e coerente, com uma linguagem formal e acadêmica. As citações devem ser integradas de maneira fluida, com o objetivo de consolidar o embasamento teórico da pesquisa, sempre seguindo as normas de citação.
        Não invente citações, utilize apenas os dados e referências fornecidos no arquivo anexado para fundamentar as discussões.
        Incluir, no minimo, 5 citações de referências bibliográficas pertinentes ao longo do texto para dar suporte à argumentação, tendo como base o arquivo anexado, se não hover citaçoes interessantes no arquivo, sempre pesquise na internet artigos REAIS que fundamentem o trabalho.
        Mantenha uma linguagem acadêmica, formal e objetiva, com foco na exposição dos estudos anteriores e na contribuição teórica do seu trabalho.
        Lembre-se de que a análise dos resultados será feita em outra seção; aqui o foco é na comparação entre os estudos da literatura e o seu estudo.
        Não escreva nada em negrito, ou insira qualquer outra estilização ou marcação mo texto.
        NUNCA escreva o titulo da sessão, eu farei isso manualmente.

        PS: Essa é a primeira parte da revisão de literatura, a continuação será solicitada posteriormente.
      `
    },
    hasReferences: true,
    isContinuation: false
  },
  {
    key: "revisaoLiteratura2",
    get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
      return `
      De continuidade a revisão de literatura do trabalho, fazendo agora a conclusão da mesma. 
        IMPORTANTE: Continue seguindo todas as diretrizes previamente ditas
      `
    },
    hasReferences: true,
    isContinuation: true
  },
  {
    key: "metodologia",
    get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
      return `
        Você é um redator acadêmico especializado em redação de Artigos Científicos. Sua tarefa é descrever detalhadamente a primeira parte da metodologia que será utilizada para abordar o tema ${tema} e alcançar o objetivo ${objetivo}. A descrição deve abranger as seguintes etapas da pesquisa:

            A abordagem de pesquisa que será adotada (qualitativa, quantitativa, mista, etc.), justificando sua adequação ao estudo.
            Os métodos de amostragem, explicando como os participantes ou dados serão selecionados e qual será o tamanho da amostra.
            Os procedimentos de coleta de dados, especificando as ferramentas ou técnicas que serão utilizadas (entrevistas, questionários, observações, etc.).
            A estratégia de análise de dados, detalhando como os dados serão processados, interpretados e organizados.
            Ao longo da descrição, inclua citações pertinentes de trabalhos acadêmicos para fortalecer a argumentação, dando preferência a referências bibliográficas recentes fornecidas no arquivo anexado. As referências devem incluir o nome do autor, título do trabalho e o link de acesso.
            Descrever o caminho metodológico que será seguido para alcançar o objetivo da pesquisa, que é ${objetivo}, e para responder à pergunta de pesquisa ${perguntaPesquisa}.

            Para a organização da metodologia:

            Voce deve escrever a PRIMEIRA PARTE da metodologia. NÃO faça a conclusão dessa sessão. Isso será feito em outro momento
            Estruture o texto em no mínimo oito parágrafos, com um total de pelo menos 2000 caracteres.
            Utilize o delimitador [--] para separar cada parágrafo.
            A seção de referências bibliográficas deve ser adicionada ao final do texto, precedida pelo marcador [r].
            Separe as referências entre si utilizando [--].
            É obrigatório fazer citações ao longo do texto, contento o nome do autor e o ano do seu trabalho, sendo elas extraídas exclusivamente do arquivo anexado.
            Garanta que a redação mantenha um tom formal e acadêmico, seguindo as normas de citação. A metodologia deve ser descrita de maneira clara, justificada e detalhada, de modo a permitir uma compreensão completa do processo de pesquisa.
            Inclua, no minimo, 5 citações de referências bibliográficas pertinentes ao longo do texto para dar suporte à argumentação,  tendo como base o arquivo anexado, se não hover citaçoes interessantes no arquivo, sempre pesquise na internet artigos REAIS que fundamentem o trabalho.


            PS: Essa é a primeira parte da metodologia, a continuação será solicitada posteriormente.
        
        `
    },
    hasReferences: true,
    isContinuation: false
  },
  {
    key: "metodologia2",
    get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
      return `
        De continuidade a metodologia do trabalho, fazendo agora a conclusão da mesma. 
        IMPORTANTE: Continue seguindo todas as diretrizes previamente ditas
        `
    },
    hasReferences: true,
    isContinuation: true
  },
  {
    key: "resultados",
    get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
      return `
        Você é um redator acadêmico especializado em apresentação de resultados de pesquisas para Artigos Científicos. Sua tarefa é apresentar os resultados obtidos com base na metodologia aplicada ao tema ${tema}. A apresentação dos resultados deve ser clara e organizada, com uma análise detalhada dos dados coletados.

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
            
            PS: Essa é a primeira parte dos resultados, a continuação será solicitada posteriormente.`
    },
    hasReferences: true,
    isContinuation: false
  },
  {
    key: "resultados2",
    get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
      return `
      De continuidade aos resultados do trabalho, fazendo agora a conclusão da mesma. 
      IMPORTANTE: Continue seguindo todas as diretrizes previamente ditas
      `
    },
    hasReferences: true,
    isContinuation: true
  },
  {
    key: "discussao",
    get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
      return `
       Você é um redator acadêmico especializado em redação de Artigos Científicos. Sua tarefa é elaborar o inicio de uma discussão detalhada sobre os resultados obtidos para o tema ${tema}. A discussão deve:

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
            Não escreva nada em negrito, ou insira qualquer outra estilização ou marcação mo texto.
            NUNCA escreva o titulo da sessão, eu farei isso manualmente.

            
            PS: Essa é a primeira parte da discussão, a continuação será solicitada posteriormente.`
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
    get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
      return `Você é um redator acadêmico especializado em elaborar a conclusão para artigos científicos. Sua tarefa é escrever, em português do Brasil, o inicio da conclusão de um Artigo Científico na área de ${areaEstudo}, cujo tema é ${tema}. A conclusão deve:

      Resumir de forma clara os principais resultados obtidos na pesquisa, explicando como eles respondem à pergunta de pesquisa, que é ${perguntaPesquisa}, e atendem ao objetivo da pesquisa, que é ${objetivo}.
      Destacar as implicações práticas e teóricas desses resultados, comentando sobre sua relevância no campo de estudo de ${areaEstudo}.
      Explicar como os achados contribuem para a área, tanto em termos de conhecimento científico quanto de aplicação prática (se aplicável).
      Sugerir possíveis limitações da pesquisa, abordando o que poderia ser melhorado ou investigado em estudos futuros.
      Propor recomendações para pesquisas futuras, indicando questões ou temas que surgiram a partir dos resultados e que podem ser aprofundados em estudos subsequentes.
      Evitar introduzir novas informações ou resultados que não tenham sido discutidos anteriormente no artigo.
      Instruções adicionais:

      Para a estrutura da conclusão:

      A conclusão deve ser escrita em, no MINIMO, 8 (oito) parágrafos, com uma sequência lógica que vá do resumo dos resultados até as recomendações futuras.
      A seção de referências bibliográficas deve ser adicionada ao final do texto, precedida pelo marcador [r].
      Utilize o delimitador [--] para separar cada parágrafo.
      Mantenha o tom acadêmico e formal, evitando opiniões pessoais ou juízos subjetivos.
      A linguagem deve ser clara e objetiva, enfatizando a contribuição do estudo para o campo de ${areaEstudo} e respondendo de forma clara à pergunta de pesquisa.
      Inclua, no minimo, 5 citações de referências bibliográficas pertinentes ao longo do texto para dar suporte à argumentação, tendo como base o arquivo anexado, se não hover citaçoes interessantes no arquivo, sempre pesquise na internet artigos REAIS que fundamentem o trabalho.
      Separe as referências entre si utilizando [--].
      A conclusão deve fornecer ao leitor uma síntese final da pesquisa, deixando claro o que foi alcançado e sugerindo novos caminhos para investigações futuras.
      Não escreva nada em negrito, ou insira qualquer outra estilização ou marcação mo texto.
      NUNCA escreva o titulo da sessão, eu farei isso manualmente.
      Certifique-se de que a conclusão seja clara e objetiva, respondendo à pergunta de pesquisa e finalizando a redação de forma coesa, com uma linguagem formal e acadêmica. As citações devem ser integradas de forma fluida e natural, consolidando os resultados da pesquisa e suas contribuições para o tema.
      
      PS: Essa é a primeira parte da conclusão, a continuação será solicitada posteriormente.
      `
    },
    hasReferences: true,
    isContinuation: false
  },
  {
    key: "conclusao2",
    get: (tema, areaEstudo, objetivo, perguntaPesquisa) => {
      return `
      De continuidade a conclusão do trabalho, fazendo agora a conclusão da mesma. 
      IMPORTANTE: Continue seguindo todas as diretrizes previamente ditas
      `
    },
    hasReferences: true,
    isContinuation: true
  },
]