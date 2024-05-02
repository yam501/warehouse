const ApiError = require('../error/ApiError')
const db = require('../db')
const {History, Items} = require("../model");

class ItemsController {

    async getAll(req, res, next) {
        try {
            return res.json(await Items.findAll())
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async create(req, res, next) {
        const t = await db.transaction()
        try {
            const {name, count, category} = req.body
            const check = await Items.findOne({where: {name: name, category: category}})
            if (check) {
                await History.create({
                    name: check.name,
                    category: check.category,
                    date: Date.now(),
                    changes: count
                }, {transaction: t})
                await check.increment({count: count}, {transaction: t})
                await t.commit()
                return res.json(200)
            } else {
                const response = await Items.create({name: name, count: count, category: category}, {transaction: t})
                await History.create({
                    name: response.name,
                    category: response.category,
                    date: Date.now(),
                    changes: count
                }, {transaction: t})
                await t.commit()
                return res.json(response)
            }

        } catch (e) {
            try {
                await t.rollback()
            } catch (e) {
                next(ApiError.badRequest(e.message))
            }
            next(ApiError.badRequest(e.message))
        }

    }

    async del(req, res, next) {
        const t = await db.transaction()
        try {
            const {name, count, category} = req.body
            const check = await Items.findOne({where: {name: name, category: category}})
            if (!check) throw ApiError.badRequest('Такой позиции не найдено')
            if (check.count > 0 && check.count > count) {
                await History.create({
                    name: check.name,
                    category: check.category,
                    date: Date.now(),
                    changes: -count
                }, {transaction: t})

                await check.decrement({count: count}, {transaction: t})

                await t.commit()
                return res.json(200)
            }

            await History.create({
                name: check.name,
                category: check.category,
                date: Date.now(),
                changes: "Потрачено"
            }, {transaction: t})


            await Items.destroy({
                where: {
                    name: name,
                    category: category
                }
            }, {transaction: t})

            await t.commit()
            return res.json(200)


        } catch (e) {
            try {
                await t.rollback()
            } catch (e) {
                next(ApiError.badRequest(e.message))
            }
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new ItemsController()