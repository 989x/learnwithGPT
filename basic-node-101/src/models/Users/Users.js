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

const getUserById = async (userId) => {
    const user = await Users.findById(userId)
    
    return user
}

const updateUserById = async (userId, doc) => {
    const updatedUser = await Users.updateOne({
        _id: userId
    }, doc, {
        returenOriginal: false
    })

    return updatedUser
}

const deleteUserById = async (userId) => {
    const deletedUser = await Users.remove({
        _id: userId
    })

    return deletedUser
}

module.exports = {
    createNewUser,
    getUsers,
    getUserById,
    updateUserById,
    deleteUserById
}