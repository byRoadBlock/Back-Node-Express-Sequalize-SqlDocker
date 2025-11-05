let buildMakeInfraestructuraDetalle = require('./infraestructura-detalle')
let infraestructuradetalleSchema = require('./infraestructura-detalle-schema')
let infraestructuradetalleValidator = require('../validator/')(infraestructuradetalleSchema)

let makeInfraestructuraDetalle = buildMakeInfraestructuraDetalle(infraestructuradetalleValidator)
module.exports = makeInfraestructuraDetalle
