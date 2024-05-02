const Router = require('express')
const router = new Router()
const itemController = require('../controller/ItemsController')
const authMiddleware = require('../middleware/AuthMiddleware')

router.post('/getAll',authMiddleware, itemController.getAll)
router.post('/del',authMiddleware, itemController.del)
router.post('/create',authMiddleware, itemController.create)

module.exports = router