let buildMakeUbicacion = require('./ubicacion')
let ubicacionSchema = require('./ubicacion-schema')
let ubicacionValidator = require('../validator/')(ubicacionSchema)

let makeUbicacion = buildMakeUbicacion(ubicacionValidator)
module.exports = makeUbicacion
