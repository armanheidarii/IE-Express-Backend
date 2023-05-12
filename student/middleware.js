const validator = require('express-validator');
const studentValidator = require('./validator.js')

module.exports.createMiddleware = () => {
    const middleware = {}

    middleware.updateStudent = async (req, res, next) => {
        studentValidator.updateStudent.run(req)
        const validationResult = validator.validationResult(req)
        if (!validationResult.isEmpty()) {
            return res.status(400).send(validationResult.array())
        }

        next()
    }

    middleware.findAllCourses = () => {

    }

    middleware.findOneCourse = () => {

    }

    return middleware
}
