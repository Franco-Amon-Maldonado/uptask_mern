import mongoose from 'mongoose'

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

const User = mongoose.model('User', userSchema) //C reo el modelo user y le asocio su esquema 

export default User