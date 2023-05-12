module.exports.setup = (db, app) => {
    require('./service.js').createService(db)

    studentMiddleware = require('./middleware').createMiddleware(db.services)
    studentHandler = require('./handler.js').createHandler(db.services)
    require('./routes.js').setup(app, studentMiddleware, studentHandler)
}
