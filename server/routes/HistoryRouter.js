const Router = require('express')
const router = new Router()
const historyController = require('../controller/HistoryController')
const authMiddleware = require('../middleware/AuthMiddleware')


router.post('/getAll', authMiddleware, historyController.getAll)

module.exports = router