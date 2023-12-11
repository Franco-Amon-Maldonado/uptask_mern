import User from "../models/User.js"


const register = async (req, res) =>{
    //Evitar registro duplicado

    const { email} = req.body
    const userExists = await User.findOne({ email: email})

    if(userExists) {
        const error = new Error ("User already exists")
        return res.status(400).json({message: error.message})
    }


    try {
        const user = new User(req.body)
        const userSaved = await user.save()
        res.json({
           userSaved
        })
    } catch (error) {
        console.error(error);
    }

   
}

export { 
    register
}