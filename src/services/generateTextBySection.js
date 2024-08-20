
// export const generateTextBySection = async (prompt, thread, assistantId, tema, areaEstudo, objetivo, perguntaPesquisa) => {

import { openai } from "./openai.js";

//       await openai.beta.threads.messages.create(
//         thread.id,
//         {
//           role: "user",
//           content: prompt.get(tema, areaEstudo, objetivo, perguntaPesquisa)
//         }
//       );

//       const run = await openai.beta.threads.runs.create(
//         thread.id,
//         { 
//           assistant_id: assistantId,
//         });

//       //true => teste \ false => producao
//       let completed = false;

//       while (!completed) {
//         try {
//           const statusRun = await openai.beta.threads.runs.retrieve(thread.id, run.id);

//           if (statusRun.status === 'completed') {
//             completed = true;
//           }
//         } catch (error) {
//           // console.error('Erro ao verificar o status:', error);
//           throw new Error(error);
//         }

//         // sleep por 5 segundos
//         await new Promise(resolve => setTimeout(resolve, 5000));
//       }


//     const messages = await openai.beta.threads.messages.list(
//       thread.id
//       // thread
//     )

//     let mensagens_assistant = messages.data.filter(objeto => objeto.role === 'assistant');

//     mensagens_assistant.reverse();
//     // console.log(mensagens_assistant)
//     // console.log("Mensagem: ", mensagens_assistant[mensagens_assistant.length - 1].content[0].text.value)

//     return mensagens_assistant[mensagens_assistant.length - 1].content[0].text.value
// }


export const generateTextBySection = async (prompt, tema, areaEstudo, objetivo, perguntaPesquisa, fileId) => {
  const thread = await openai.beta.threads.create();

  await openai.beta.threads.messages.create(
    thread.id,
    {
      role: "user",
      content: prompt.get(tema, areaEstudo, objetivo, perguntaPesquisa),
      attachments: [{ file_id: fileId, tools: [{ type: "file_search" }] }]
    }
  );

  let run;
  let completed = false;

  try {
    run = await openai.beta.threads.runs.create(
      thread.id,
      {
        assistant_id: "asst_vgmgNL1DzTdbbKE3bsclcDks",
        tools: [{ type: 'file_search' }]
      });

    while (!completed) {
      const statusRun = await openai.beta.threads.runs.retrieve(thread.id, run.id);

      if (statusRun.status === 'completed') {
        completed = true;
      } else if (statusRun.status === 'failed') {
        console.error('Execução falhou:', statusRun);
        await new Promise(resolve => setTimeout(resolve, 8000)); // Espera antes de tentar novamente
        break;
      } else {
        await new Promise(resolve => setTimeout(resolve, 7000)); // Espera antes de verificar novamente
      }
    }
  } catch (error) {
    if (error.message.includes("rate_limit_exceeded")) {
      console.error('Limite de cota excedido. Aguardando antes de tentar novamente...', error);
    } else {
      console.error('Erro ao verificar o status:', error);
    }
  }

  try {
    const messages = await openai.beta.threads.messages.list(thread.id);
    let mensagens_assistant = messages.data.filter(objeto => objeto.role === 'assistant');

    if (mensagens_assistant.length === 0) {
      throw new Error('Nenhuma mensagem do assistente encontrada.');
    }

    mensagens_assistant.reverse();
    const lastMessage = mensagens_assistant[mensagens_assistant.length - 1];

    if (!lastMessage || !lastMessage.content || !lastMessage.content[0] || !lastMessage.content[0].text || !lastMessage.content[0].text.value) {
      throw new Error('Conteúdo da última mensagem do assistente não encontrado.');
    }

    return lastMessage.content[0].text.value;
  } catch (error) {
    console.error('Erro ao obter mensagens do assistente:', error);
    throw error;
  }
};
