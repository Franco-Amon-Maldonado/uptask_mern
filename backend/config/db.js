
import mongoose from 'mongoose'

const connectionDB = async () => {
	try {
		const connection = await mongoose.connect(process.env.PASSWORD_MONGO)

        const url = `${connection.connection.host}:${connection.connection.port}`
        console.log(`Mongo conectado en: ${url}`);
	} catch (error) {
		console.error(error.message)
		process.exit(1) //Forza el proceso a terminar
	}
}

export default connectionDB
