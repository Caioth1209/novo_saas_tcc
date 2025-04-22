import { Router } from "express";
import dbController from "../controllers/dbController.js";

const dbRoutes = Router()

dbRoutes.post('/diminuiCredito', dbController.diminuiCredito)
dbRoutes.post('/isGerando', dbController.isGerando)
dbRoutes.post('/setGerando', dbController.setGerando)
export default dbRoutes
