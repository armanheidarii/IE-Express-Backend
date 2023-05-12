module.exports.setup = (app, middleware, handler) => {
    const router = require('express').Router()

    // group admin zade 
    app.use('/', router)

    const authenticateToken = require('../jwt').authenticateToken
    // router.use(authenticateToken)
    // router.use(middleware.isAdmin)

    router.post('/admin', handler.createAdmin)

    router.post('/admin/student', authenticateToken, middleware.createStudent, middleware.isITManager, handler.createStudent)
    router.put('/admin/student/:id', authenticateToken, middleware.updateStudent, middleware.isITManager, handler.updateStudent)
    router.delete('/admin/student/:id', authenticateToken, middleware.deleteStudent, middleware.isITManager, handler.deleteStudent)
    router.get('/admin/students', authenticateToken, middleware.getAllStudents, middleware.isITManager, handler.getAllStudents)
    router.get('/admin/student/:id', authenticateToken, middleware.getOneStudent, middleware.isITManager, handler.getOneStudent)
}
