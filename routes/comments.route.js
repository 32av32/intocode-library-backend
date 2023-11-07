const { Router } = require('express')
const { commentsController } = require('../controllers/comments.controller')
const router = Router()


router.get('', commentsController.getComments)
router.post('', commentsController.postComment)
router.delete('/:id', commentsController.deleteComment)
router.patch('/:id', commentsController.patchComment)

module.exports = router;