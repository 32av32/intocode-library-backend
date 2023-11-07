const Book = require('../models/Book.model')


module.exports.booksController = {
    getBook: async (req, res) => {
        try {
            res.json(await Book.findById(req.params.id).populate('genres'))
        } catch (err) {
            res.json(err)
        }
    },
    getBooks: async (req, res) => {
        try {
            res.json(await Book.find(req.query.genres ? { post: req.query.genres } : null).populate('genres'))
        } catch (err) {
            res.json(err)
        }
    },
    postBook: async (req, res) => {
        try {
            await Book.create({...req.body})
            res.json('Record created')
        } catch (err) {
            res.json(err)
        }
    },
    deleteBook: async (req, res) => {
        try {
            await Book.findByIdAndDelete(req.params.id)
            res.json('Record has been deleted')
        } catch (err) {
            res.json(err)
        }
    },
    patchBook: async (req, res) => {
        try {
            await Book.findByIdAndUpdate(req.params.id, {...req.body})
            res.json('Record has been changed')
        } catch (err) {
            res.json(err)
        }
    }
}