const Genre = require('../models/Genre.model')


module.exports.genresController = {
    getGenres: async (req, res) => {
        try {
            res.json(await Genre.find())
        } catch (err) {
            res.json(err)
        }
    },
    postGenre: async (req, res) => {
        try {
            await Genre.create({...req.body})
            res.json('Record created')
        } catch (err) {
            res.json(err)
        }
    },
    deleteGenre: async (req, res) => {
        try {
            await Genre.findByIdAndDelete(req.params.id)
            res.json('Record has been deleted')
        } catch (err) {
            res.json(err)
        }
    },
    patchGenre: async (req, res) => {
        try {
            await Genre.findByIdAndUpdate(req.params.id, {...req.body})
            res.json('Record has been changed')
        } catch (err) {
            res.json(err)
        }
    }
}