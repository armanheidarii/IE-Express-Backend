const validator = require('express-validator');

module.exports.setup = (app, middleware, handler) => {
    const router = require('express').Router()

    app.use('/', router)

    router.post('/login', middleware.login, handler.login)
}
