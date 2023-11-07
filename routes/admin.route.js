const { Router } = require('express')
const { adminController } = require('../controllers/admin.controller')
const { booksController } = require("../controllers/books.controller");
const {genresController} = require("../controllers/genres.controller");
const {usersController} = require("../controllers/users.controller");
const router = Router()


router.post('/books', booksController.postBook)
router.delete('/books/:id', booksController.deleteBook)
router.patch('/books/:id', booksController.patchBook)

router.post('/genres', genresController.postGenre)
router.delete('/genres/:id', genresController.deleteGenre)
router.patch('/genres/:id', genresController.patchGenre)

router.post('/users', usersController.postUser)
router.delete('/users/:id', usersController.deleteUser)
router.patch('/users/:id', usersController.patchUser)
router.get('/users/block/:id', adminController.blockUser)
router.get('/users/unlock/:id', adminController.unlockUser)

module.exports = router;