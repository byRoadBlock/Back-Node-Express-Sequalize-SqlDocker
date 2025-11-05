let buildMakeTipoCliente = require('./tipo-cliente')
let tipoclienteSchema = require('./tipo-cliente-schema')
let tipoclienteValidator = require('../validator/')(tipoclienteSchema)

let makeTipoCliente = buildMakeTipoCliente(tipoclienteValidator)
module.exports = makeTipoCliente
