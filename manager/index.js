module.exports.setup = (db, app) => {
    require('./service.js').createService(db)

    ITManagerMiddleware = require('./middleware').createMiddleware(db.services)
    ITManagerHandler = require('./handler.js').createHandler(db.services)
    require('./routes.js').setup(app, ITManagerMiddleware, ITManagerHandler)
}
