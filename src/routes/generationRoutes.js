import { Router } from "express";
import generateController from "../controllers/generateTccController.js";
const generateRoute = Router()

generateRoute.post('/', generateController.generateAsyncTcc)

export default generateRoute