module.exports.setup = (app, middleware, handler) => {
    const router = require('express').Router()

    app.use('/', router)

    const authenticateToken = require('../jwt').authenticateToken
    // router.use(authenticateToken)

    router.put('/student/:id', authenticateToken, middleware.isStudent, middleware.updateStudent, handler.updateStudent)
    router.get('/courses', authenticateToken, middleware.isStudent, middleware.findAllCourses, handler.findAllCourses)
    router.get('/courses/:id', authenticateToken, middleware.isStudent, middleware.findOneCourse, handler.findOneCourse)
}
