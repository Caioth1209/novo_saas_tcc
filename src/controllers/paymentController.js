import sheetsApi from "../services/sheetsApi.js";
import {adminApp} from "../services/firebaseAdmin.js";
async function updateSheetPayment(email, res) {
    try {
        // Primeiro, vamos encontrar a linha que contém o email
        const range = 'A:E'; // Ajuste este intervalo conforme sua planilha
        const request = {
            spreadsheetId: process.env.SHEETS_LEADS_SPREADSHEET_ID,
            range,
        };

        const response = await sheetsApi.spreadsheets.values.get(request);
        const rows = response.data.values;

        // Encontrar a linha correspondente ao email
        const rowToUpdate = rows.findIndex(row => row[1] === email); // Supondo que o email está na coluna B (índice 1)

        // Atualizar os valores na mesma linha
        const updatedRow = [rows[rowToUpdate][0], email, rows[rowToUpdate][2], 'Confirmado']; // Atualizando nome e telefone
        const updateRange = `A${rowToUpdate + 1}:D${rowToUpdate + 1}`; // Define o intervalo para atualização

        const updateRequest = {
            spreadsheetId: process.env.SHEETS_LEADS_SPREADSHEET_ID,
            range: updateRange,
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: [updatedRow],
            },
        };

        await sheetsApi.spreadsheets.values.update(updateRequest);

    } catch (err) {
        console.log(err.message);
    }
}

async function webhookGuru(req, res, next) {
    try {
        const { status } = req.body;

        if (status == "approved") {
            const dates = req.body.dates;

            const { confirmed_at } = dates;

            if (confirmed_at != null) {

                const { email } = req.body.contact;
                req.body.email = email;
                updateSheetPayment(email, res)
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

async function webhookGuru2(req, res) {
    try {
        const { status } = req.body;

        if (status == "approved") {
            const dates = req.body.dates;

            const { confirmed_at } = dates;

            if (confirmed_at != null) {

                const { email } = req.body.contact;
                
                const docSnapshot = await adminApp.firestore().collection("orders").doc(email).get()

                const { tema, areaEstudo, objetivo, perguntaPesquisa, tipoTrabalho, confirmed_at: confirmed_at_db } = docSnapshot.data()

                if (confirmed_at == confirmed_at_db) {
                    return res.status(200).send('Pagamento já foi processado...');
                }

                updateSheetPayment(email, res)

                await fetch(`https://caiobapps.app.n8n.cloud/webhook/gerarTurbo`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ 
                        email,
                        tema,
                        tipo: tipoTrabalho,
                        areaEstudo,
                        objetivo,
                        pergunta: perguntaPesquisa,
                    })
                });
                await adminApp.firestore().collection("orders").doc(email).update({ gerando: true, confirmed_at })

                
                return res.status(200).send('Pagamento aprovado e gerando TCC...');
            } else {
                return res.status(200).send('Data de confirmação não encontrada.');
            }
        } else {
            return res.status(200).send('Pagamento não aprovado.');
        }


    } catch (error) {
        console.error('Erro no webhook:', error);
        return res.status(200).send('Erro no processamento do webhook.');
    }
}

const generateController = { webhookGuru, webhookGuru2 };

export default generateController;
