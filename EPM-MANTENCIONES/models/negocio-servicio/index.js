let buildMakeNegocioServicio = require('./negocio-servicio')
let negocioservicioSchema = require('./negocio-servicio-schema')
let negocioservicioValidator = require('../validator/')(negocioservicioSchema)

let makeNegocioServicio = buildMakeNegocioServicio(negocioservicioValidator)
module.exports = makeNegocioServicio
