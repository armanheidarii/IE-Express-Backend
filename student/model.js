const gradeType = require('../types/grade.js')
const semesterType = require('../types/semester.js')

const studentModel = {
    grade: {
        type: String,
        enum: Object.values(gradeType).map(value => value.description)
    },
    entryYear: Number,
    entrySemester: {
        type: String,
        enum: Object.values(semesterType).map(value => value.description)
    },
    avgScore: Number,
    // college:,
    // field:,
}

module.exports = studentModel

// roll_no: {
//      type: Number,
//      required: true
// }

// orderDate: { type: Date, default: Date.now }, baraye avg 
