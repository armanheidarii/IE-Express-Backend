const validator = require('express-validator');
const studentValidator = require('./validator.js')

module.exports.createMiddleware = services => {
    const middleware = {}

    middleware.isStudent = async (req, res, next) => {
        const filter = { username: req.user.username }
        const user = await services.userService.getOneUser(filter)

        if (!user) {
            return res.status(400).send('Username does not exist.')
        }

        const userType = require('../types/user.js')
        if (user.userType != userType.student.description) {
            return res.sendStatus(403)
        }

        req.student = user
        next()
    }

    middleware.updateStudent = async (req, res, next) => {
        await studentValidator.updateStudent.run(req)
        const validationResult = validator.validationResult(req)
        if (!validationResult.isEmpty()) {
            return res.status(400).send(validationResult.array())
        }

        const validData = validator.matchedData(req)
        if (req.student.username != validData.id) {
            return res.sendStatus(403)
        }

        req.validData = validData
        next()
    }

    middleware.findAllCourses = () => {

    }

    middleware.findOneCourse = () => {

    }

    return middleware
}
