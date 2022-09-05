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

    },

    update: async(req, res) =>{
        const{id} = req.params
        try{
            let itinerary = await Itinerary.findOne({_id:id})
            if(itinerary){
                await Itinerary.findByIdAndupdate({_id:id}, req.body)
                res.status(200).json({
                    message: "itinerary updated",
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "couldn't find itinerary",
                    success: false
                })
            }
        } catch(error){
            console.log(error)
            res.status(400).json({
                message: "error",
                success: false
            })
        }
    }
}

module.exports = itineraryController