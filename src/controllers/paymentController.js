

async function webhookGuru(req, res, next) {
    try {
        const { status } = req.body;

        if (status == "approved") {
            const dates = req.body.dates;

            const { confirmed_at } = dates;

            if (confirmed_at != null) {

                const { email } = req.body.contact;
                req.email = email;
                next();  // Continue para a próxima função
            } else {
                res.status(200).send('Data de confirmação não encontrada.');
            }
        } else {
            res.status(200).send('Pagamento não aprovado.');
        }


    } catch (error) {
        console.error('Erro no webhook:', error);
        res.status(200).send('Erro no processamento do webhook.');
    }
}

const generateController = { webhookGuru };

export default generateController;
