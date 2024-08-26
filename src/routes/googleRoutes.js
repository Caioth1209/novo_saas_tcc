import { Router } from "express";
import GoogleController from "../controllers/googleController.js";

const googleRoutes = Router()

googleRoutes.post('/sheets', GoogleController.updateSheetNewUser)

export default googleRoutes
