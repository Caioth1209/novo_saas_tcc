import {adminApp} from "../services/firebaseAdmin.js";

async function diminuiCredito(req, res) {
    try {
        const { email } = req.body;

        const docSnapshot = await adminApp.firestore().collection("orders").doc(email).get()

        let qntdCreditos = docSnapshot.data().qntdCreditos

        qntdCreditos = qntdCreditos <= 0 ? 0 : qntdCreditos - 1

        await adminApp.firestore().collection("orders").doc(email).update({ qntdCreditos, gerando: false })

        res.status(201).send('Ok')
    } catch (err) {
        console.log(err.message);
        return res.status(200).send(err.message)
    }
}

const dbController = { diminuiCredito }

export default dbController