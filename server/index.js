require('dotenv').config()
const db = require('./db')
const model = require('./model')
const express = require('express')
const PORT = process.env.PORT || 5000
const app = express()
const router = require('./routes/index')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')


const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));


app.use(cookieParser())


app.use(express.json())
app.use('/api', router)

app.use(errorHandler)
const start = async () => {
    try {
        await db.authenticate()
        await db.sync({alter: true})
        // await db.reInitializeServer()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()