const response = require('./response')

module.exports.createHandler = services => {
    const handler = {}

    handler.updateStudent = async (req, res) => {
        const data = req.validData
        const student = req.student

        if (student.username != data.username) {
            const filter = { username: data.username }
            const student = await services.studentService.getOneStudent(filter)

            if (student) {
                return res.status(400).send('This username is already registered.')
            }
        }

        delete data.idParam
        const filter = { username: student.username }
        const updatedStudent = await services.studentService.updateStudent(filter, data)

        if (!updatedStudent) {
            return res.status(400).send('ID does not exist.')
        }

        res.send(response.updateStudent(updatedStudent))
    }

    handler.findAllCourses = (req, res) => {
    }

    handler.findOneCourse = (req, res) => {

    }

    return handler
}
