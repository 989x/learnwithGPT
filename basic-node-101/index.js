// const mongoose = require('mongoose')

const buildApp = require('./src/app')

const startApp = async () => {
    const appOptions = {
        logger: true
    }
    const app = buildApp(appOptions)

}

startApp()