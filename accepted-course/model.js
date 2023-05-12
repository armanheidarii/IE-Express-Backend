const mongoose = require('mongoose')

const acceptedCourseModel = {
    name: String,
    prerequisite: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AcceptedCourse'
    },
    coRequirement: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AcceptedCourse'
    },
    unit: Number
}

module.exports = acceptedCourseModel
