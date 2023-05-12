const validator = require('express-validator')

module.exports.createHandler = services => {
    const handler = {}

    handler.updateStudent = (req, res) => {
        const data = validator.matchedData(req)
        console.log('hi there ${data.username}')
    }

    handler.findAllCourses = (req, res) => {
        console.log(req.user)
        res.send('hi')
    }

    handler.findOneCourse = (req, res) => {

    }

    return handler
}
