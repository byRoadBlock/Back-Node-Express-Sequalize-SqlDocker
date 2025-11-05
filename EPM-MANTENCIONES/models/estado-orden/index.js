let buildMakeEstadoOrden = require('./estado-orden')
let estadoordenSchema = require('./estado-orden-schema')
let estadoordenValidator = require('../validator/')(estadoordenSchema)

let makeEstadoOrden = buildMakeEstadoOrden(estadoordenValidator)
module.exports = makeEstadoOrden
