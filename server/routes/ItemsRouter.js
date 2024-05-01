const Router = require('express')
const router = new Router()
const itemController = require('../controller/ItemsController')


router.post('/getAll', itemController.getAll)
router.post('/del', itemController.del)
router.post('/create', itemController.create)

module.exports = router