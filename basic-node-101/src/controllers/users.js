const userModel = require('../models/Users/Users')

const getUsers = async (request, reply) => {
    // const users = await userModel.getUsers()
    // reply.send(users)
    reply.send('getUser')
}

const getUserById = async (request, reply) => {
    reply.send('getUserById')
}

const postUser = async (request, reply) => {
    const { body } = request
    const user = await userModel.createNewUser(body)
    reply.send('postUser')
}

const patchUser = async (request, reply) => {
    // const { body } = request
    // const user = await userModel.createNewUser(body)
    reply.send(user)
}

const deleteUser = async (request, reply) => {
    reply.send('deleteUser') 
}

module.exports = {
    getUserById,
    getUsers,
    postUser,
    patchUser,
    deleteUser
}