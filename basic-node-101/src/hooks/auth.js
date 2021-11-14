const jwt = require('jsonwebtoken')
const config = require('../config')

const validateToken = async (request, reply) => {
    try{
        const { authorization } = request.headers
    
        if (!authorization) {
            throw new Error('missing authorization in headers')
        }
    
        const token = authorization.split(' ')[1]
     
        // console.log('token ->', jwt.decode(token))
    
        await jwt.verify(token, config.secretKey)

    } catch (error) {
        reply.statusCode = 401
        throw error
    }
 
}

module.exports = {
    validateToken
}