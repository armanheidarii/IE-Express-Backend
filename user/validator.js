const validator = require('express-validator');

module.exports.login = {
    username: validator.body('username').exists().withMessage('Username is required!')
        .trim().notEmpty().withMessage('Username cannot be empty!')
        .isLength({ max: 32 }).withMessage('Username is too long.')
        .matches(/[\w_]+/).withMessage('Username must be a combination of upper and lower case English letters and numbers'),

    password: validator.body('password').exists().withMessage('Password is required!')
        .trim().notEmpty().withMessage('Password cannot be empty!')
        .isLength({ min: 8 }).withMessage('Password must have at least 8 characters.')
        .isLength({ max: 32 }).withMessage('Password is too long.')
        .matches(/[\w_]+/).withMessage('Password must be a combination of upper and lower case English letters and numbers'),

    run: async function (req) {
        const validations = Object.values(this).slice(0, -1)
        for (const validation of validations) {
            await validation.run(req)
        }
    }
}
