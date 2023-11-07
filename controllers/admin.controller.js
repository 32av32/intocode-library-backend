const Book = require('../models/Book.model')
const User = require('../models/User.model')


module.exports.adminController = {
    blockUser: async (req, res) => {
        try {
            await User.findByIdAndUpdate(req.params.id, { isBlocked: true, books: [] })
            await Book.updateMany({ borrower: req.params.id }, { borrower: null })
            res.json('User blocked')
        } catch (err) {
            res.json(err)
        }
    },
    unlockUser: async (req, res) => {
        try {
            await User.findByIdAndUpdate(req.params.id, { isBlocked: false })
            res.json('User unlocked')
        } catch (err) {
            res.json(err)
        }
    }
}