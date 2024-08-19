import { Router } from "express";
import generateController from "../controllers/generateTccController.js";

const generateRoute = Router()

generateRoute.post('/tcc', generateController.generateAsyncTcc)
generateRoute.get('/teste', (req,res)=> {
    res.send({message: true})
})

export default generateRoute