const validator = require('express-validator')

const gradeType = require('../types/grade.js')
const semesterType = require('../types/semester.js')

module.exports.createStudent = {
    username: validator.body('username').exists().withMessage('Username is required!')
        .trim().notEmpty().withMessage('Username cannot be empty!')
        .isLength({ max: 32 }).withMessage('Username is too long.')
        .matches(/[\w_]+/).withMessage('Username must be a combination of upper and lower case English letters and numbers'),

    password: validator.body('password').exists().withMessage('Password is required!')
        .trim().notEmpty().withMessage('Password cannot be empty!')
        .isLength({ min: 8 }).withMessage('Password must have at least 8 characters.')
        .isLength({ max: 32 }).withMessage('Password is too long.')
        .matches(/[\w_]+/).withMessage('Password must be a combination of upper and lower case English letters and numbers'),

    phoneNumber: validator.body('phoneNumber').exists().withMessage('PhoneNumber is required!')
        .trim().notEmpty().withMessage('PhoneNumber cannot be empty!')
        .isLength({ min: 11, max: 11 }).matches(/[\d]+/).withMessage('PhoneNumber is incorrect.'),

    fullName: validator.body('fullName').exists().withMessage('Full name is required!')
        .trim().notEmpty().withMessage('Full name cannot be empty!')
        .isLength({ max: 32 }).withMessage('Full name is too long.')
        .matches(/([a-zA-Z]+( ?))+/).withMessage('Full name must be a combination of upper and lower case English letters. (example: Dennis Ritchie)'),

    email: validator.body('email').optional().trim().notEmpty().withMessage('Email cannot be empty!')
        .isEmail().withMessage('Email is incorrect.'),

    grade: validator.body('grade').exists().withMessage('Grade is required!')
        .trim().notEmpty().withMessage('Grade cannot be empty!')
        .isIn(Object.values(gradeType).map(gradeValue => gradeValue.description)).withMessage('Grade is incorrect.'),

    entryYear: validator.body('entryYear').exists().withMessage('Entry year is required!')
        .trim().notEmpty().withMessage('Entry year cannot be empty!')
        .isInt({ min: 1900, max: 2100 }).withMessage('Entry year is incorrect.'),

    entrySemester: validator.body('entrySemester').exists().withMessage('Entry semester is required!')
        .trim().notEmpty().withMessage('Entry semester cannot be empty!')
        .isIn(Object.values(semesterType).map(symbolValue => symbolValue.description)).withMessage('Entry semester is incorrect.'),

    run: async function (req) {
        const validations = Object.values(this).slice(0, -1)
        for (const validation of validations) {
            await validation.run(req)
        }
    }
}

module.exports.updateStudent = {
    paramID: validator.param('id').exists().withMessage('ID is required!')
        .trim().notEmpty().withMessage('ID cannot be empty!')
        .isLength({ max: 32 }).withMessage('ID is too long.')
        .matches(/[\w_]+/).withMessage('ID must be a combination of upper and lower case English letters and numbers'),

    username: validator.body('username').exists().withMessage('Username is required!')
        .trim().notEmpty().withMessage('Username cannot be empty!')
        .isLength({ max: 32 }).withMessage('Username is too long.')
        .matches(/[\w_]+/).withMessage('Username must be a combination of upper and lower case English letters and numbers'),

    password: validator.body('password').exists().withMessage('Password is required!')
        .trim().notEmpty().withMessage('Password cannot be empty!')
        .isLength({ min: 8 }).withMessage('Password must have at least 8 characters.')
        .isLength({ max: 32 }).withMessage('Password is too long.')
        .matches(/[\w_]+/).withMessage('Password must be a combination of upper and lower case English letters and numbers'),

    phoneNumber: validator.body('phoneNumber').exists().withMessage('PhoneNumber is required!')
        .trim().notEmpty().withMessage('PhoneNumber cannot be empty!')
        .isLength({ min: 11, max: 11 }).matches(/[\d]+/).withMessage('PhoneNumber is incorrect.'),

    email: validator.body('email').optional().trim().notEmpty().withMessage('Email cannot be empty!')
        .isEmail().withMessage('Email is incorrect.'),

    grade: validator.body('grade').exists().withMessage('Grade is required!')
        .trim().notEmpty().withMessage('Grade cannot be empty!')
        .isIn(Object.values(gradeType).map(gradeValue => gradeValue.description)).withMessage('Grade is incorrect.'),

    entryYear: validator.body('entryYear').exists().withMessage('Entry year is required!')
        .trim().notEmpty().withMessage('Entry year cannot be empty!')
        .isInt({ min: 1900, max: 2100 }).withMessage('Entry year is incorrect.'),

    entrySemester: validator.body('entrySemester').exists().withMessage('Entry semester is required!')
        .trim().notEmpty().withMessage('Entry semester cannot be empty!')
        .isIn(Object.values(semesterType).map(symbolValue => symbolValue.description)).withMessage('Entry semester is incorrect.'),

    run: async function (req) {
        const validations = Object.values(this).slice(0, -1)
        for (const validation of validations) {
            await validation.run(req)
        }
    }
}

module.exports.deleteStudent = {
    paramID: validator.param('id').exists().withMessage('ID is required!')
        .trim().notEmpty().withMessage('ID cannot be empty!')
        .isLength({ max: 32 }).withMessage('ID is too long.')
        .matches(/[\w_]+/).withMessage('ID must be a combination of upper and lower case English letters and numbers'),

    run: async function (req) {
        const validations = Object.values(this).slice(0, -1)
        for (const validation of validations) {
            await validation.run(req)
        }
    }
}

module.exports.getOneStudent = {
    paramID: validator.param('id').exists().withMessage('ID is required!')
        .trim().notEmpty().withMessage('ID cannot be empty!')
        .isLength({ max: 32 }).withMessage('ID is too long.')
        .matches(/[\w_]+/).withMessage('ID must be a combination of upper and lower case English letters and numbers'),

    run: async function (req) {
        const validations = Object.values(this).slice(0, -1)
        for (const validation of validations) {
            await validation.run(req)
        }
    }
}
