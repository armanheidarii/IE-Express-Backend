const validator = require("express-validator")
const response = require('./response')

module.exports.createHandler = services => {
    const handler = {}

    handler.createAdmin = async (req, res) => {
        const ans = await services.ITManagerService.createAdmin()
        res.send(ans)
    }

    handler.createStudent = async (req, res) => {
        const gradeType = require('../types/grade.js')
        const semesterType = require('../types/semester.js')

        const data = validator.matchedData(req)

        const filter = { username: data.username }
        const student = await services.studentService.getOneStudent(filter)

        if (student) {
            return res.status(400).send('This username is already registered.')
        }

        // samte db default 0 dashte bashe 
        data.avgScore = 0

        const newStudent = await services.studentService.createStudent(data)

        res.status(201).send(response.createStudent(newStudent))
    }

    handler.updateStudent = async (req, res) => {
        const data = validator.matchedData(req)

        const filter = { username: data.id }
        const student = await services.studentService.getOneStudent(filter)

        if (!student) {
            return res.status(400).send('ID does not exist.')
        }

        if (student.username != data.username) {
            const filter = { username: data.username }
            const student = await services.studentService.getOneStudent(filter)

            if (student) {
                return res.status(400).send('This username is already registered.')
            }
        }

        delete data.idParam
        const updatedStudent = await services.studentService.updateStudent(filter, data)

        if (!updatedStudent) {
            return res.status(400).send('ID does not exist.')
        }

        res.send(response.updateStudent(updatedStudent))
    }

    handler.deleteStudent = async (req, res) => {
        const data = validator.matchedData(req)

        const filter = { username: data.id }
        const student = await services.studentService.deleteStudent(filter)

        if (!student) {
            return res.status(400).send('ID does not exist.')
        }

        res.send(response.deleteStudent(student))
    }

    handler.getAllStudents = async (req, res) => {
        const students = await services.studentService.getAllStudents()

        res.send(response.getAllStudents(students))
    }

    handler.getOneStudent = async (req, res) => {
        const data = validator.matchedData(req)

        const filter = { username: data.id }
        const student = await services.studentService.getOneStudent(filter)

        if (!student) {
            return res.status(400).send('ID does not exist.')
        }

        res.send(response.getOneStudent(student))
    }

    return handler
}
