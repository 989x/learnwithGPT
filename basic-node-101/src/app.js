const Fastify = require('fastify')
const routes = require('./routes')
const config = require('./config')

// new
const mongoose = require('mongoose')

const buildApp = async (options = {}) => {
    const app = Fastify(options)

    routes.userRoutes(app)

    try {
        await app.listen(config.port, config.hostname)
        console.log(`app is listening on port ${config.port}`)

        await mongoose.connect(config.mongodb.uri, {
            useNewUrlParser: true,
            // useCreateIndex: true,
            useUnifiedTopology: true
        })
        console.log('mongo has been connected')
    } catch (error) {
        throw error
    }

    return app
}

module.exports = buildApp