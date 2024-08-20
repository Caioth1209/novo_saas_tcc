import mailerSend from "../services/mailersend.js";

export async function sendTcc(blob, email) {
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
        subject: 'TCC Turbo',
        text: 'Aqui está o seu TCC Turbo!',
        attachments: [
            {
                content: blob, // O conteúdo do arquivo
                filename: './tccturbo.docx',
                type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                disposition: 'attachment'
            }
        ]
    };

    // Enviar o email
    try {
        const response = await mailerSend.email.send(emailData);
        console.log('Email enviado com sucesso!', response);
    } catch (emailErr) {
        console.error('Erro ao enviar email:', emailErr);
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