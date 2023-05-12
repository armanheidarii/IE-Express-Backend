const semesterCourseModel = require("./model")

module.exports.createService = db => {
    const semesterCourseSchema = db.mongoose.Schema(semesterCourseModel, { discriminatorKey: 'courseType' })
    const SemesterCourse = db.mongoose.model('SemesterCourse', semesterCourseSchema)

    service = {}



    db.services.semesterCourseService = service
}
