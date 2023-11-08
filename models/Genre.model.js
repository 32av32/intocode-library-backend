const mongoose = require('mongoose')
const Schema = mongoose.Schema
const genreSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
})

module.exports = mongoose.model('Genre', genreSchema)