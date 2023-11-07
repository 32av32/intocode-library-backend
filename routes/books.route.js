const { Router } = require('express')
const { booksController } = require('../controllers/books.controller')
const router = Router()


router.get('/books', booksController.getBooks)
router.get('/books/:id', booksController.getBook)
router.post('/books', booksController.postBook)
router.delete('/books/:id', booksController.deleteBook)
router.patch('/books/:id', booksController.patchBook)

module.exports = router;