import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/index.js';
import googleRoutes from './routes/googleRoutes.js';

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.get('/health', (req, res) => {
    return res.send('OK!')
})
app.use('/payment', routes)
app.use('/google', googleRoutes)

export default app
