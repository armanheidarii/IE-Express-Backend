module.exports.setup = (db, app) => {
    require('./service.js').createService(db)
}
