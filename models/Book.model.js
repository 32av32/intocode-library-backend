const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genres: [{
        type: Schema.Types.ObjectId,
        ref: 'Genre',
        required: true
    }],
    borrower: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: null
    }
})

module.exports = mongoose.model('Book', bookSchema)