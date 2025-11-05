let buildMakeOrdenDetalle = require('./orden-detalle')
let ordendetalleSchema = require('./orden-detalle-schema')
let ordendetalleValidator = require('../validator/')(ordendetalleSchema)

let makeOrdenDetalle = buildMakeOrdenDetalle(ordendetalleValidator)
module.exports = makeOrdenDetalle
