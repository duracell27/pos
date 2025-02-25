require("dotenv").config();

const config = Object.freeze({
    port: process.env.PORT || 3000,
    databaseUri: process.env.MONGODB_URI || 'mongodb:://localhost:27017/pos',
    nodeEnv: process.env.NODE_ENV || 'development',
    jwtSecret: process.env.JWT_SECRET || 'secret123'
})

module.exports = config