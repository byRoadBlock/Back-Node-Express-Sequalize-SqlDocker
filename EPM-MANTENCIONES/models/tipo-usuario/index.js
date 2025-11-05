let buildMakeTipoUsuario = require('./tipo-usuario')
let tipousuarioSchema = require('./tipo-usuario-schema')
let tipousuarioValidator = require('../validator/')(tipousuarioSchema)

let makeTipoUsuario = buildMakeTipoUsuario(tipousuarioValidator)
module.exports = makeTipoUsuario
