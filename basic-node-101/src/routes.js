const controllers = require('./controllers')
const hooks = require('./hooks')

const userRoutes = (app) => {
    // app.get('/users', async (Request, reply) => {
    //     reply.send('GET USERS')
    app.get('/users', {
        preHandler: [hooks.auth.validateToken]
    }, controllers.users.getUsers)
    app.get('/users/:userId', controllers.users.getUserById)
    app.post('/users', controllers.users.postUser)
    app.patch('/users', controllers.users.patchUser)
    app.delete('/users', controllers.users.deleteUser)

    app.post('/login', controllers.users.postUserLogin)
    
}

module.exports = {
    userRoutes
}