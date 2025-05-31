import { Router } from "express";
import generateController from "../controllers/generateTccController.js";
import paymentController from '../controllers/paymentController.js'
const generateRoute = Router()

// generateRoute.post('/tcc', generateController.generateAsyncTcc); // -- usado para testar em localhost
generateRoute.post('/tcc', paymentController.webhookGuru, generateController.generateAsyncTcc);

generateRoute.post('/webhook', paymentController.webhookGuru2);
generateRoute.post('/webhook-pepper', paymentController.webhookPepper);


export default generateRoute