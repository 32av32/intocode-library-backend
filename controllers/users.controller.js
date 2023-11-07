const User = require('../models/User.model')
const Book = require('../models/Book.model')


module.exports.usersController = {
    getUser: async (req, res) => {
        try {
            res.json(await User.findById(req.params.id))
        } catch (err) {
            res.json(err)
        }
    },
    getUsers: async (req, res) => {
        try {
            res.json(await User.find())
        } catch (err) {
            res.json(err)
        }
    },
    postUser: async (req, res) => {
        try {
            await User.create({...req.body})
            res.json('Record created')
        } catch (err) {
            res.json(err)
        }
    },
    deleteUser: async (req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.json('Record has been deleted')
        } catch (err) {
            res.json(err)
        }
    },
    patchUser: async (req, res) => {
        try {
            let { name } = req.body
            await User.findByIdAndUpdate(req.params.id, { name })
            res.json('Record has been changed')
        } catch (err) {
            res.json(err)
        }
    },
    takeBook: async (req, res) => {
        try {
            let user = await User.findById(req.params.id)
            let book = await Book.findById(req.body.book)

            if (user.isBlocked) {
                res.json('Вы заблокированы')
            } else if (user.books.length >= 3) {
                res.json('Нельзя арендовать больше 3-х книг одновременно')
            } else if (book.borrower) {
                res.json('Эта книга уже арендована другим пользователем')
            } else {
                user.books.push(book._id)
                await user.save()
                book.borrower = user._id
                await book.save()
                res.json('Book loaned')
            }
        } catch (err) {
            res.json(err)
        }
    },
    removeBook: async (req, res) => {
        try {
            let user = await User.findById(req.params.id)
            let book = await Book.findById(req.body.book)

            if (user.books.includes(book._id)) {
                user.books.pull(book._id)
                await user.save()
                book.borrower = null
                await book.save()
                res.json('Book removed')
            } else {
                res.json('У вас нет этой книги')
            }
        } catch (err) {
            res.json(err)
        }
    }
}