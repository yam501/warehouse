const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const {Users} = require('../model')
const tokenController = require('./tokenController')

const UserDto = require('../dto/UserDto')

class UserController {

    async registration(req, res, next) {
        try {
            const {number, role, password} = req.body

            const candidate = await Users.findOne({where: {number: number}})

            if (candidate) {
                return next(ApiError.badRequest('Пользователь с таким номером уже существует'))
            }

            const hashPassword = await bcrypt.hash(password, 5)

            const user = await Users.create({number, role, password: hashPassword})


            const userDto = new UserDto(user)
            const tokens = tokenController.generateTokens({...userDto})
            await tokenController.saveToken(userDto.id, tokens.refreshToken)

            res.cookie('refreshToken', tokens.refreshToken, {maxAge: 10 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json("Success")
            // return res.json({accessToken: tokens.accessToken, user: {...userDto}})

        } catch (e) {
            next(ApiError.badRequest(e.message))

        }
    }
    async login(req, res, next) {
        try {
            const { number, password } = req.body
            const user = await Users.findOne({ where: { number: number } })
            if (!user) {
                throw ApiError.badRequest('Неверный номер телефона или пароль')
            }
            const isPassEquals = bcrypt.compareSync(password, user.password)
            if (!isPassEquals) {
                throw ApiError.badRequest('Неверный номер телефона или пароль')
            }
            const userDto = new UserDto(user)
            const tokens = tokenController.generateTokens({ ...userDto })
            await tokenController.saveToken(userDto.id, tokens.refreshToken)


            res.cookie('refreshToken', tokens.refreshToken, { maxAge: 10 * 24 * 60 * 60 * 1000, httpOnly: true })
            return res.json({accessToken: tokens.accessToken, user: {...userDto}})
            // return res.json({...tokens, user: {...userDto}})

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async logout(req, res, next) {
        try {
            const { refreshToken } = req.cookies
            const deletedToken = await tokenController.removeToken(refreshToken)
            res.clearCookie('refreshToken')
            //res.clearCookie('accessToken')
            return res.json(deletedToken)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async refresh(req, res, next) {
        try {
            const { refreshToken } = req.cookies
            if (!refreshToken) {
                throw ApiError.badRequest('Не авторизован')
            }
            const userData = tokenController.validateRefreshToken(refreshToken)
            const tokenFromDb = tokenController.findToken(refreshToken)
            if (!userData || !tokenFromDb) {
                throw ApiError.badRequest('Не авторизован')
            }
            const user = await Users.findOne({ where: { id: userData.id } })
            const userDto = new UserDto(user)
            const tokens = tokenController.generateTokens({ ...userDto })

            await tokenController.saveToken(userDto.id, tokens.refreshToken)

            res.cookie('refreshToken', tokens.refreshToken, { maxAge: 10 * 24 * 60 * 60 * 1000, httpOnly: true })

            return res.json({accessToken: tokens.accessToken, user: {...userDto}})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }




}


module.exports = new UserController()