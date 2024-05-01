const ApiError = require('../error/ApiError')

const {History} = require( "../model");


class HistoryController {
    async getAll(req, res, next) {
        try {
            return res.json(await History.findAll())
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new HistoryController()