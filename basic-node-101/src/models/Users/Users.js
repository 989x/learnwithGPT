const bcrypt = require('bcrypt')
const Users = require('./schema')

const generatePassword = async (password) => {
    const saltRound = 10
    const salt = await bcrypt.genSalt(saltRound)
    const passwordHashed = await bcrypt.hash(password, salt)

    return passwordHashed
}

const createNewUser = async (doc = {}) => {
    const insertDoc = { ...doc }

    insertDoc.password = await generatePassword(doc.password)

    const newUser = new Users(insertDoc)

    return await newUser.save()
}

const getUsers = async () => {
    const users = await Users.find()

    return users
}

module.exports = {
    createNewUser,
    getUsers
}