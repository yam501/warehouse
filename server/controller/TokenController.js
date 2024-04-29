const {Token} = require('../model')
const jwt = require('jsonwebtoken')

class TokenController {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET_KEY, {expiresIn: '60m'})
        const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET_KEY, {expiresIn: '10d'})
        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.ACCESS_SECRET_KEY)
            return userData
        } catch (e) {
            return null
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.REFRESH_SECRET_KEY)
            return userData
        } catch (e) {
            return null
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await Token.findOne({where: {userId: userId}})
        if (tokenData) {
            return await Token.update({refreshToken: refreshToken}, {where: {userId: userId}})
        }
        const token = await Token.create({userId: userId, refreshToken: refreshToken})
        return token
    }

    async removeToken(refreshToken) {
        const deleted = await Token.destroy({where: {refreshToken: refreshToken}})
        return deleted
    }

    async findToken(refreshToken) {
        const token = await Token.findOne({where: {refreshToken: refreshToken}})
        return token
    }
}

module.exports = new TokenController()