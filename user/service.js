const userModel = require('./model.js')

module.exports.createService = db => {
    const userSchema = db.mongoose.Schema(userModel, { discriminatorKey: 'userType' })
    const User = db.mongoose.model('User', userSchema)

    service = {}

    service.User = User

    service.getOneUser = filter => {
        return User.findOne(filter)
    }

    // service.updateValidUserData =

    db.services.userService = service
}
