import User from "../models/User.js"


const register = async (req, res) =>{

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