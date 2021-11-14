const config = {
    nodeEnv: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    hostname: process.env.HOSTNAME || 'localhost',

    mongodb: {
        uri: 'mongodb://localhost/basic101'
        // uri: process.env.MONGO_URI || 'mogodb://localhost/basic101'
    },
    secretKey: process.env.SECRET_KEY
}

module.exports = config

