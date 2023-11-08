const mongoose = require('mongoose')
const Schema = mongoose.Schema
const commentSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    book: {
        type: Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Comment', commentSchema)