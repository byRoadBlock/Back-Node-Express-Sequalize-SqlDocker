let buildMakeNegocioDetalle = require('./negocio-detalle')
let negociodetalleSchema = require('./negocio-detalle-schema')
let negociodetalleValidator = require('../validator/')(negociodetalleSchema)

let makeNegocioDetalle = buildMakeNegocioDetalle(negociodetalleValidator)
module.exports = makeNegocioDetalle
