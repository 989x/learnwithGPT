const mongoose = require('mongoose')

const collection = 'User'

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    surname: {
        type: String,
        require: true
    }
},{
    timestamp: true,
    versionKey: false,
    collection
}) 

module.exports = mongoose.model(collection, userSchema)