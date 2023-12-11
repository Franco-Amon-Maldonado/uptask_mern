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

    


}

export { register, authenticator }
