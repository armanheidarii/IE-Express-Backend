module.exports.setup = (db, app) => {
    require('./service.js').createService(db)

    middleware = require('./middleware.js').createMiddleware()
    handler = require('./handler.js').createHandler(db.services)
    require('./routes.js').setup(app, middleware, handler)
}
