const Itinerary = require('../models/Itinerary')

const itineraryController = {
    create: async(req, res) =>{
        const{name, user, city, price, likes, tags, duration} = req.body
        try{
            await new Itinerary(req.body).save()
            res.status(201).json({
                message: "itinerary has been created succesfuly",
                success: true
            })
        } catch(error){
            console.log(error);
            res.status(400).json({
                message:"couldn't create itinerary",
                success: false
            })
        }

    }
}

module.exports = itineraryController