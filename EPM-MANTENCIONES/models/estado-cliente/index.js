let buildMakeEstadoCliente = require('./estado-cliente')
let estadoclienteSchema = require('./estado-cliente-schema')
let estadoclienteValidator = require('../validator/')(estadoclienteSchema)

let makeEstadoCliente = buildMakeEstadoCliente(estadoclienteValidator)
module.exports = makeEstadoCliente
