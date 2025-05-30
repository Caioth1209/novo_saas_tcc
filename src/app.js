import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import paymentRoutes from './routes/paymentRoutes.js';
import googleRoutes from './routes/googleRoutes.js';
import generationRoutes from './routes/generationRoutes.js';
import dbRoutes from './routes/dbRoutes.js';
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.use('/payment', paymentRoutes)
app.use('/generate', generationRoutes)
app.use('/google', googleRoutes)
app.use('/db', dbRoutes)
export default app
