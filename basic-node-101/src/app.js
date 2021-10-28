const Fastify = require('fastify')
const routes = require('./routes')
const config = require('./config')

const buildApp = async (options = {}) => {
    const app = Fastify(options)

    routes.userRoutes(app)

    try {
        await app.listen(config.port, config.hostname)
        console.log(`app is listening on port ${config.port}`)
    } catch (error) {
        throw error
    }

    return app
}

module.exports = buildApp