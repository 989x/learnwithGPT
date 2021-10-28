const config = {
    nodeEnv: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    hostname: process.env.HOSTNAME || 'localhost'
}

module.exports = config

