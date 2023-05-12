const validator = require('express-validator');
const ITManagerValidator = require('./validator.js')


module.exports.createMiddleware = services => {
    const middleware = {}

    middleware.isITManager = async (req, res, next) => {
        const filter = { username: req.user.username }
        const user = await services.userService.getOneUser(filter)

        if (!user) {
            return res.status(400).send('Username does not exist.')
        }

        const userType = require('../types/user.js')
        if (user.userType != userType.ITManager.description) {
            return res.sendStatus(403)
        }

        req.ITManager = user
        next()
    }

    middleware.createStudent = async (req, res, next) => {
        await ITManagerValidator.createStudent.run(req)
        const validationResult = validator.validationResult(req)
        if (!validationResult.isEmpty()) {
            return res.status(400).send(validationResult.array())
        }

        req.validData = validator.matchedData(req)
        next()
    }

    middleware.updateStudent = async (req, res, next) => {
        await ITManagerValidator.updateStudent.run(req)
        const validationResult = validator.validationResult(req)
        if (!validationResult.isEmpty()) {
            return res.status(400).send(validationResult.array())
        }

        req.validData = validator.matchedData(req)
        next()
    }

    middleware.deleteStudent = async (req, res, next) => {
        await ITManagerValidator.deleteStudent.run(req)
        const validationResult = validator.validationResult(req)
        if (!validationResult.isEmpty()) {
            return res.status(400).send(validationResult.array())
        }

        req.validData = validator.matchedData(req)
        next()
    }

    middleware.getAllStudents = async (req, res, next) => {
        next()
    }

    middleware.getOneStudent = async (req, res, next) => {
        await ITManagerValidator.getOneStudent.run(req)
        const validationResult = validator.validationResult(req)
        if (!validationResult.isEmpty()) {
            return res.status(400).send(validationResult.array())
        }

        req.validData = validator.matchedData(req)
        next()
    }

    return middleware
}
