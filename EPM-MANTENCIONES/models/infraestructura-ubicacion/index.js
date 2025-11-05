let buildMakeInfraestructuraUbicacion = require('./infraestructura-ubicacion')
let infraestructuraubicacionSchema = require('./infraestructura-ubicacion-schema')
let infraestructuraubicacionValidator = require('../validator/')(infraestructuraubicacionSchema)

let makeInfraestructuraUbicacion = buildMakeInfraestructuraUbicacion(infraestructuraubicacionValidator)
module.exports = makeInfraestructuraUbicacion
