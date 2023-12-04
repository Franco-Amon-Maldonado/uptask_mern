import express from "express";
import {register} from '../controllers/userController.js';

const router = express.Router()

//Autenticacion, registro y confirmacion de usuario

router.post('/', register) //Crea un nuevo usuario


export default router 