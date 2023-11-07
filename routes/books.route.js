const { Router } = require('express')
const { booksController } = require('../controllers/books.controller')
const router = Router()


router.get('', booksController.getBooks)
router.get('/:id', booksController.getBook)

module.exports = router;