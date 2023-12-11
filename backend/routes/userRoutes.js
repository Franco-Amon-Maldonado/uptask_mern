import express from "express";
import {register, authenticator} from '../controllers/userController.js';

const router = express.Router()

//Autenticacion, registro y confirmacion de usuario

router.post('/', register) //Crea un nuevo usuario
router.post('/login', authenticator) //Autenticacion del usuario

export default router 