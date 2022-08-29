const mongoose = require('mongoose')
const citiesSchema = new mongoose.Schema({
    city: {typeof: String, required:true},
    country: {typeof: String, required:true},
    photo: {typeof: String, required:true},
    population: {typeof: Number, required:true},
    foundation: {typeof: Number, required:true}
})


const City = mongoose.model(
    'cities',
    citiesSchema
)

module.exports = City