import sheetsApi from "../services/sheetsApi.js";

async function updateSheetNewUser(req, res) {
    try {
        const { name, email, telefone, pagamento } = req.body;

        const payment = pagamento ? 'Confirmado' : 'Ainda não pago'

        const range = 'A:E';
        const valueInputOption = 'USER_ENTERED';
        const insertDataOption = 'INSERT_ROWS';
        const valueRange = {
            values: [
                [name, email, telefone, payment]
            ],
        };

        const request = {
            spreadsheetId: process.env.SHEETS_LEADS_SPREADSHEET_ID,
            range,
            valueInputOption,
            insertDataOption,
            resource: valueRange,
        };

        await sheetsApi.spreadsheets.values.append(request)
            .then(async () => {
                return;
            })
            .catch((err) => {
                console.log(err.response.data);
                return;
            });

        res.status(201).send('Ok')
    } catch (err) {
        console.log(err.message);
        return res.status(500).send(err)
    }
}

const GoogleController = { updateSheetNewUser }

export default GoogleController