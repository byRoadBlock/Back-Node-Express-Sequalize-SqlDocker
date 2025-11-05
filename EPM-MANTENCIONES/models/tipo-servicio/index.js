let buildMakeTipoServicio = require('./tipo-servicio')
let tiposervicioSchema = require('./tipo-servicio-schema')
let tiposervicioValidator = require('../validator/')(tiposervicioSchema)

let makeTipoServicio = buildMakeTipoServicio(tiposervicioValidator)
module.exports = makeTipoServicio
