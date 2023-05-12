const acceptedCourseModel = require("./model")

module.exports.createService = db => {
    const acceptedCourseSchema = db.mongoose.Schema(acceptedCourseModel, { discriminatorKey: 'courseType' })
    const AcceptedCourse = db.mongoose.model('AcceptedCourse', acceptedCourseSchema)

    service = {}

    

    db.services.acceptedCourseService = service
}
