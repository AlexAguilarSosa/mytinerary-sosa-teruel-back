const mongoose = require('mongoose')

const commentsSchema = new mongoose.Schema({
    comment: {type: String, required:true},
    user: {type: String, required:false},
    itinerary: {type: String, required:false}
})


const Comment = mongoose.model(
    'comments',
    commentsSchema
)

module.exports = Comment