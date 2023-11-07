const { Router } = require('express')
const { usersController } = require('../controllers/users.controller')
const router = Router()


router.get('', usersController.getUsers)
router.get('/:id', usersController.getUser)
router.post('/:id/take_book', usersController.takeBook)
router.post('/:id/remove_book', usersController.removeBook)

module.exports = router;