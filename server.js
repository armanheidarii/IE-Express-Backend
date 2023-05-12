require('dotenv').config()

const db = require('./database')

const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

// tartib setup moheme?
require('./user').setup(db, app)

require('./it-manager').setup(db, app)

require('./student').setup(db, app)

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
