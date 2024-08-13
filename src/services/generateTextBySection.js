
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
  let completed

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
        await new Promise(resolve => setTimeout(resolve, 8000));
        break;
      } else {
        console.log('Status atual da execução:', statusRun.status);
      }

      // sleep por 7 segundos
      await new Promise(resolve => setTimeout(resolve, 7000));
    }
  } catch (error) {
    if (error.message.includes("rate_limit_exceeded")) {
      console.error('Limite de cota excedido. Aguardando antes de tentar novamente...');
    } else {
      console.error('Erro ao verificar o status:', error);
    }
  }
  const messages = await openai.beta.threads.messages.list(thread.id);
  let mensagens_assistant = messages.data.filter(objeto => objeto.role === 'assistant');
  mensagens_assistant.reverse();

  return mensagens_assistant[mensagens_assistant.length - 1].content[0].text.value;
}