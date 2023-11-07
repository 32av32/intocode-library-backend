const { Router } = require('express')
const { genresController } = require('../controllers/genres.controller')
const router = Router()


router.get('/genres', genresController.getGenres)
router.post('/genres', genresController.postGenre)
router.delete('/genres/:id', genresController.deleteGenre)
router.delete('/genres/:id', genresController.patchGenre)

module.exports = router;