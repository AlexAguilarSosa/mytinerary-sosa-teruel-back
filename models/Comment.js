const mongoose = require('mongoose')
const City = require('./City')

const commentsSchema = new mongoose.Schema({
    comment: {type: String, required:true},
    user: {type: String, required:false},
    itinerary: {type: String, required:false},
    city: {type: mongoose.Types.ObjectId, ref: 'cities', required:true}
})


const Comment = mongoose.model(
    'comments',
    commentsSchema
)

module.exports = Comment