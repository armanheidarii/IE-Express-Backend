const validator = require('express-validator');
const userValidator = require('./validator.js')

module.exports.createMiddleware = () => {
    const middleware = {}

    middleware.login = async (req, res, next) => {
        await userValidator.login.run(req)
        const validationResult = validator.validationResult(req)
        if (!validationResult.isEmpty()) {
            return res.status(400).send(validationResult.array())
        }

        next()
    }

    return middleware
}
