const Router = require('express')
const router = new Router()
const authMiddleware = require('../middleware/AuthMiddleware')
const checkRole = require('../middleware/CheckRoleMiddleware')
const userController = require('../controller/UserController')


router.post('/reg',authMiddleware, checkRole('ADMIN'), userController.registration)
router.post('/log', userController.login)
router.post('/unlog', authMiddleware, userController.logout)
router.get('/refresh', userController.refresh)


module.exports = router