module.exports.setup = (app, middleware, handler) => {
    const router = require('express').Router()

    // group admin zade 
    app.use('/', router)

    const authenticateToken = require('../jwt').authenticateToken
    // router.use(authenticateToken)
    // router.use(middleware.isAdmin)

    router.post('/admin', handler.createAdmin)

    router.post('/admin/student', authenticateToken, middleware.isITManager, middleware.createStudent, handler.createStudent)
    router.put('/admin/student/:id', authenticateToken, middleware.isITManager, middleware.updateStudent, handler.updateStudent)
    router.delete('/admin/student/:id', authenticateToken, middleware.isITManager, middleware.deleteStudent, handler.deleteStudent)
    router.get('/admin/students', authenticateToken, middleware.isITManager, middleware.getAllStudents, handler.getAllStudents)
    router.get('/admin/student/:id', authenticateToken, middleware.isITManager, middleware.getOneStudent, handler.getOneStudent)
}
