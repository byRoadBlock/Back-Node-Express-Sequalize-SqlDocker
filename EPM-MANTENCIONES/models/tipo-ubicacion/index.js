let buildMakeTipoUbicacion = require('./tipo-ubicacion')
let tipoubicacionSchema = require('./tipo-ubicacion-schema')
let tipoubicacionValidator = require('../validator/')(tipoubicacionSchema)

let makeTipoUbicacion = buildMakeTipoUbicacion(tipoubicacionValidator)
module.exports = makeTipoUbicacion
