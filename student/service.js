const studentModel = require('./model.js')

module.exports.createService = async db => {
    const userType = require('../types/user.js')

    const User = db.services.userService.User
    const Student = User.discriminator(userType.student.description,
        new db.mongoose.Schema(studentModel))

    service = {}

    service.createStudent = studentData => {
        const student = new Student(studentData)
        return student.save()
    }

    service.updateStudent = (filter, data) => {
        return Student.findOneAndUpdate(filter, data, { new: true })
    }

    service.deleteStudent = filter => {
        return Student.findOneAndDelete(filter)
    }

    service.getAllStudents = () => {
        return Student.find({})
    }

    service.getOneStudent = filter => {
        return Student.findOne(filter)
    }

    db.services.studentService = service
}
