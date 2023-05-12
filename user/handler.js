const validator = require('express-validator');

module.exports.createHandler = services => {
    const handler = {}

    handler.login = async (req, res) => {
        const data = req.validData

        const filter = { username: data.username }
        const user = await services.userService.getOneUser(filter)

        if (!user) {
            return res.status(400).send('Username does not exist.')
        }

        if (user.password != data.password) {
            return res.status(400).send('Your password was not match.')
        }

        const generateAccessToken = require('../jwt').generateAccessToken
        const token = generateAccessToken({ username: data.username });

        res.status(200).send({ token: token });
    }

    return handler
}
