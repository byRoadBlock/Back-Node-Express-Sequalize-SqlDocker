let buildMakeEstadoTrabajos = require('./estado-trabajos')
let estadotrabajosSchema = require('./estado-trabajos-schema')
let estadotrabajosValidator = require('../validator/')(estadotrabajosSchema)

let makeEstadoTrabajos = buildMakeEstadoTrabajos(estadotrabajosValidator)
module.exports = makeEstadoTrabajos
