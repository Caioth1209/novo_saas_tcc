import { Router } from "express";
import generateController from "../controllers/generateTccController.js";
import paymentController from '../controllers/paymentController.js'
const generateRoute = Router()

// generateRoute.post('/tcc', generateController.generateAsyncTcc); // -- usado para testar em localhost
generateRoute.post('/tcc', paymentController.webhookGuru, generateController.generateAsyncTcc);

export default generateRoute