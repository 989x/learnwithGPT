const userRoutes = (app) => {
    app.get('/users', async (Request, reply) => {
        reply.send('GET USERS')
    })
}

module.exports = {
    userRoutes
}