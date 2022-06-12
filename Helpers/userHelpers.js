
//importing modules
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()
const userConfig = require('../Config/authConfig')


//currently not in use
module.exports.generateToken = (id) => {
    jwt.sign({ id }, userConfig.secret, {
        expiresIn: 1 * 24 * 60 * 60 * 1000
    } )
}