import User from '../models/User.js'
import generateId from '../helpers/generateId.js'

const register = async (req, res) => {
	//Evitar registro duplicado

	const { email } = req.body
	const userExists = await User.findOne({ email: email })

	if (userExists) {
		const error = new Error('User already exists')
		return res.status(400).json({ message: error.message })
	}

	try {
		const user = new User(req.body)
        user.token = generateId()
		const userSaved = await user.save() //Metodo de guardar de mongoose
		res.json({
			userSaved,
		})
	} catch (error) {
		console.error(error)
	}
}


const authenticator = async (req, res) => {

    const { email, password } = req.body

    //Comprobacion si el usuario existe
    const user = await User.findOne({ email: email })
    if(!user) {
        const error = new Error('Usuario no existe')
        return res.status(400).json({ message: error.message })
    }

    //Comprobacion si el usuario esta confirmado
    if(!user.userConfirm) {
        const error = new Error('Tu cuenta no ha sido confirmada')
        return res.status(403).json({ message: error.message })
    }
    //Compracion de password





}

export { register, authenticator }
