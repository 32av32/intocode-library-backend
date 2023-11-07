const mongoose = require('mongoose')
const Schema = mongoose.Schema
const commentSchema = new Schema({
    text: {
        type: String,
        require: true
    },
    book: {
        type: Schema.Types.ObjectId,
        ref: 'Book',
        require: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
    }
})

module.exports = mongoose.model('Comment', commentSchema)