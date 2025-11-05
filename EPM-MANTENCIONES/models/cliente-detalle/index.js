let buildMakeClienteDetalle = require('./cliente-detalle')
let clientedetalleSchema = require('./cliente-detalle-schema')
let clientedetalleValidator = require('../validator/')(clientedetalleSchema)

let makeClienteDetalle = buildMakeClienteDetalle(clientedetalleValidator)
module.exports = makeClienteDetalle
