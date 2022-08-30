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
    },
    
    read: async(req, res) => {
        const {id} = req.params
        try{
            let city = await City.findOne({_id:id})
            if(city){
                res.status(200).json({
                    message: 'this is the city you search',
                    response: city,
                    success: true
                })
            } else {
                res.status(404).json({
                    message:"couldn't find city",
                    success: false
                })
            }
    } catch(error){
        console.log(error);
        res.status(400).json({
            message: "error",
            success: false
        })
    }
    }
}



module.exports = cityController