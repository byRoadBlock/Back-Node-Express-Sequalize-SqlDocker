let buildMakeOrdenServicio = require('./orden-servicio')
let ordenservicioSchema = require('./orden-servicio-schema')
let ordenservicioValidator = require('../validator/')(ordenservicioSchema)

let makeOrdenServicio = buildMakeOrdenServicio(ordenservicioValidator)
module.exports = makeOrdenServicio
