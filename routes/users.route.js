const { Router } = require('express')
const { usersController } = require('../controllers/users.controller')
const router = Router()


router.get('/users', usersController.getUsers)
router.get('/users/:id', usersController.getUser)
router.post('/users', usersController.postUser)
router.delete('/users/:id', usersController.deleteUser)
router.patch('/users/:id', usersController.patchUser)
router.post('/users/:id/take_book', usersController.takeBook)
router.post('/users/:id/remove_book', usersController.removeBook)

module.exports = router;