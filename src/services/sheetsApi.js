import { google } from 'googleapis'
import dotenv from 'dotenv'

dotenv.config()
const client_email = process.env.SHEETS_CLIENT_EMAIL;
let private_key = process.env.SHEETS_PRIVATE_KEY;

if (private_key != undefined) {
    private_key = private_key.replace(/\\n/g, '\n')
}

const auth = new google.auth.JWT(
    client_email,
    null,
    private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
);

export default google.sheets({ version: 'v4', auth });