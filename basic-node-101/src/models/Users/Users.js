const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Users = require('./schema')
const config = require('../../config')

const generatePassword = async (password) => {
    const saltRound = 10
    const salt = await bcrypt.genSalt(saltRound)
    const passwordHashed = await bcrypt.hash(password, salt)

    return passwordHashed
}

const comparePassword = async (password, exisitsPassword) => {
    const isPasswordCorrect = await bcrypt.compare(password, exisitsPassword)

    if (!isPasswordCorrect){
        throw new Error('unauthorized')
    }

    return true
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

const loginUser = async (username, password) => {
    const user = await Users.findOne({
        username
    })

    if (!user) {
        throw new Error('unauthorized')
    }

    await comparePassword(password, user.password)

    const token = jwt.sign({
        id: user._id
    }, config.secretKey, {
        expiresIn: 60
    })
    return token
}

module.exports = {
    createNewUser,
    getUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    loginUser
}