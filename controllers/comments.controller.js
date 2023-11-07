const Comment = require('../models/Comment.model')


module.exports.commentsController = {
    getComments: async (req, res) => {
        try {
            res.json(
                await Comment.find(req.query.book ? { book: req.query.book } : {'': ''}).populate('book user')
            )
        } catch (err) {
            res.json(err)
        }
    },
    postComment: async (req, res) => {
        try {
            await Comment.create({...req.body})
            res.json('Record created')
        } catch (err) {
            res.json(err)
        }
    },
    deleteComment: async (req, res) => {
        try {
            await Comment.findByIdAndDelete(req.params.id)
            res.json('Record has been deleted')
        } catch (err) {
            res.json(err)
        }
    },
    patchComment: async (req, res) => {
        try {
            await Comment.findByIdAndUpdate(req.params.id, {...req.body})
            res.json('Record has been changed')
        } catch (err) {
            res.json(err)
        }
    }
}