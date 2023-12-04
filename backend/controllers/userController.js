import User from "../models/User.js"


const register = (req, res) =>{

    try {
        const user = new User(req.body)
        console.log(user);
    } catch (error) {
        console.error(error);
    }

    res.json({
        msg: "Registrando usuario"
    })
}

export { 
    register
}