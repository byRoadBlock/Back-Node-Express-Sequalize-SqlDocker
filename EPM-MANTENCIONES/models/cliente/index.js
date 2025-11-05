let buildMakeCliente = require('./cliente')
let clienteSchema = require('./cliente-schema')
let clienteValidator = require('../validator/')(clienteSchema)

let makeCliente = buildMakeCliente(clienteValidator)
module.exports = makeCliente
