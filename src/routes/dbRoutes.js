import { Router } from "express";
import dbController from "../controllers/dbController.js";

const dbRoutes = Router()

dbRoutes.post('/diminuiCredito', dbController.diminuiCredito)

export default dbRoutes
