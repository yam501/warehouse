const Router = require('express')
const router = new Router()
const historyController = require('../controller/HistoryController')

router.post('/getAll', historyController.getAll)

module.exports = router