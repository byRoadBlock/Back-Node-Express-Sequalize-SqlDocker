let buildMakeUsuarioLogin = require('./usuario-login')
let usuariologinSchema = require('./usuario-login-schema')
let usuariologinValidator = require('../validator/')(usuariologinSchema)

let makeUsuarioLogin = buildMakeUsuarioLogin(usuariologinValidator)
module.exports = makeUsuarioLogin
