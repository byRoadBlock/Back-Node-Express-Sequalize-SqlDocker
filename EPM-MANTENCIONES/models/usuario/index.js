let buildMakeUsuario = require('./usuario')
let usuarioSchema = require('./usuario-schema')
let usuarioValidator = require('../validator/')(usuarioSchema)

let makeUsuario = buildMakeUsuario(usuarioValidator)
module.exports = makeUsuario
