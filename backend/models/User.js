import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true, //campo requerido
			trim: true, //elimina espacios en blanco de inicio y final
		},
		password: {
			type: String,
			required: true, //campo requerido
			trim: true, //elimina espacios en blanco de inicio y final
		},
		email: {
			type: String,
			required: true, //campo requerido
			trim: true,
			unique: true, //Campo unico en la base de datos
		},
		token: {
			type: String,
		},
		userConfirm: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
)

userSchema.pre('save', async function(next){ //Codigo que se ejecutará antes de almacenar el registro en la base de datos
	//Revisa que el password no haya sido cambiado
	if(!this.isModified('password')){
		next() //Avanza al siguiente middleware
	}
	const salt = await bcrypt.genSalt(10) //Rondas para hashear la password
	this.password = await bcrypt.hash(this.password, salt) 

})

const User = mongoose.model('User', userSchema) //Creo el modelo user y le asocio su esquema 

export default User