let buildMakeTipoOrden = require('./tipo-orden')
let tipoordenSchema = require('./tipo-orden-schema')
let tipoordenValidator = require('../validator/')(tipoordenSchema)

let makeTipoOrden = buildMakeTipoOrden(tipoordenValidator)
module.exports = makeTipoOrden
