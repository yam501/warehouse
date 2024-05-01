const Router = require('express')
const router = new Router()

const userRouter = require('./UserRouter')
const itemRouter = require('./ItemsRouter')
const historyRouter = require('./HistoryRouter')



router.use('/user', userRouter)
router.use('/item', itemRouter)
router.use('/history', historyRouter)



module.exports = router