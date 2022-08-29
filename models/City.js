const mongoose = require('mongoose')

const citiesSchema = new mongoose.Schema({
    city: {type: String, required:true},
    country: {type: String, required:true},
    photo: {type: String, required:true},
    population: {type: Number, required:true},
    foundation: {type: Number, required:true}
})


const City = mongoose.model(
    'cities',
    citiesSchema
)

module.exports = City