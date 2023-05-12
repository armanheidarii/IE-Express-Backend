const ITManagerModel = require("./model")

module.exports.createService = db => {
    const userType = require('../types/user.js')

    const User = db.services.userService.User
    const ITManager = User.discriminator(userType.ITManager.description,
        new db.mongoose.Schema(ITManagerModel))

    service = {}

    service.createAdmin = () => {
        return (new ITManager({
            username: 'admin',
            password: 'adminadmin123',
            fullName: 'admin admin',
            phoneNumber: '09121111111',
            email: 'a@gmail.com'
        })).save()
    }

    db.services.ITManagerService = service
}
