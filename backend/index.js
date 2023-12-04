import express from 'express';
import dotenv from 'dotenv'

import connectionDB from './config/db.js';
import userRoutes from './routes/userRoutes.js'

const app = express()
app.use(express.json()) //Habilitacion al servidor para leer la informacion que recibe como json

dotenv.config() //Configuracion para leer las variables de entorno

connectionDB() //Llamada a la funcion que contiene la configuracion a la coneccion de la base de datos de mongodb

//Routing
app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Puerto abierto en ${PORT}`);
})