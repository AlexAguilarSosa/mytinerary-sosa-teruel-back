const City = require('../models/City')

const cityController = {
    create: async(req, res) =>{
        const {city, country, photo, population, foundation} = req.body 
        try{
            await new City(req.body).save() //req.body tiene que tener SI O SI todas la variables antes descriptas
            res.status(201).json({
                message: 'city has been created succesfuly',
                success: true
            })
        } catch(error){
            res.status(400).json({
                message:"couldn't create city",
                success: false
            })
        }
    }
}

module.exports = cityController