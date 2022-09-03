const Auth = require('../models/User')

const authController = {
    create: async(req, res) =>{
        const{name, lastName, mail, password, photo, country} = req.body
        try{
            await new Auth(req.body).save()
            res.status(201).json({
                message: "user has been created succesfuly",
                success: true
            })
        } catch(error){
            console.log(error);
            res.status(400).json({
                message:"couldn't create user",
                success: false
            })
        }

    }
}

module.exports = authController