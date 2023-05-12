const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to database')
}).catch(err => {
    console.log(err.message)
})

db = {}
db.mongoose = mongoose
db.services = {}

module.exports = db
