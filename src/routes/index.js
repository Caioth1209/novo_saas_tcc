import { Router } from "express";
import generateController from "../controllers/generateTccController.js";

const generateRoute = Router()

generateRoute.post('/tcc', generateController.generateAsyncTcc)

export default generateRoute