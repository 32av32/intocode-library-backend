const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bookSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    genres: [{
        type: Schema.Types.ObjectId,
        ref: 'Genre',
        require: true
    }],
    borrower: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: null
    }
})

module.exports = mongoose.model('Book', bookSchema)