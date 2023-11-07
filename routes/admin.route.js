const { Router } = require('express')
const { adminController } = require('../controllers/admin.controller')
const router = Router()


router.get('/admin/users/block/:id', adminController.blockUser)
router.get('/admin/users/unlock/:id', adminController.unlockUser)

module.exports = router;