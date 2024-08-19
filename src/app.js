import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/index.js';

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.get('/health', (req, res) => {
    return res.send('OK!')
})
app.use('/payment', routes)

export default app
