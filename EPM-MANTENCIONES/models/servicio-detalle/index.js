let buildMakeServicioDetalle = require('./servicio-detalle')
let serviciodetalleSchema = require('./servicio-detalle-schema')
let serviciodetalleValidator = require('../validator/')(serviciodetalleSchema)

let makeServicioDetalle = buildMakeServicioDetalle(serviciodetalleValidator)
module.exports = makeServicioDetalle
