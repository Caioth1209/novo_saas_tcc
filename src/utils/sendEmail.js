import mailerSend from "../services/mailersend.js";

export async function sendTcc(blob, email) {
    if (!blob) {
        throw new Error('No file provided.'); // Verifica se o arquivo (blob) foi fornecido
    }

    const sentFrom = {
        email: 'naoresponda@tccautomatico.net',
        name: 'TCC Turbo'
    };

    const recipients = [
        {
            email: email,
            name: ''
        }
    ];

    const arrayBuffer = await blob.arrayBuffer();
    const base64String = Buffer.from(arrayBuffer).toString('base64');

    const attachment = {
        content: base64String,
        filename: 'tccturbo.docx',
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // Tipo do arquivo
        disposition: 'attachment'
    };

    const emailParams = {
        from: sentFrom,
        to: recipients,
        subject: 'TCC Turbo - Seu TCC está pronto!',
        text: 'Aqui está o seu TCC Turbo!',
        html: 'Seu TCC está pronto! <br><br>Faça o download agora:', // Mensagem em HTML
        attachments: [attachment] // Anexa o arquivo
    };

    // Enviar o email
    try {
        const response = await mailerSend.email.send(emailParams); // Chama a função de envio
        console.log('Email enviado com sucesso!', response); // Log de sucesso
    } catch (emailErr) {
        console.error('Erro ao enviar email:', emailErr); // Log de erro
        throw new Error('Erro ao enviar email!'); // Lança um erro caso o envio falhe
    }
}

export async function sendAwaitTcc(email) {
    const emailData = {
        from: {
            email: 'naoresponda@tccautomatico.net',
            name: 'TCC Turbo'
        },
        to: [
            {
                email: email,
                name: ''
            }
        ],
        subject: 'Seu TCC Está Sendo Gerado!',
        text: 'Olá! 😊\n\nEstamos felizes em informar que seu TCC está sendo gerado com muito carinho! \n\nPor favor, aguarde um momento enquanto finalizamos os detalhes. Em breve, você receberá seu TCC prontinho. \n\nObrigado pela sua paciência!\n\nAtenciosamente,\nA equipe TCC Turbo.',
    };

    // Enviar o email
    try {
        const response = await mailerSend.email.send(emailData);
        console.log('Email enviado com sucesso!', response);
    } catch (emailErr) {
        console.error('Erro ao enviar email:', emailErr);
    }

}