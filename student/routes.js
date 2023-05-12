module.exports.setup = (app, middleware, handler) => {
    const router = require('express').Router()

    app.use('/', router)

    const authenticateToken = require('../jwt').authenticateToken
    // router.use(authenticateToken)

    router.put('/student/:id', middleware.updateStudent, handler.updateStudent)
    router.get('/courses', middleware.findAllCourses, handler.findAllCourses)
    router.get('/courses/:id', middleware.findOneCourse, handler.findOneCourse)
}
