let buildMakeNegocioOrden = require('./negocio-orden')
let negocioordenSchema = require('./negocio-orden-schema')
let negocioordenValidator = require('../validator/')(negocioordenSchema)

let makeNegocioOrden = buildMakeNegocioOrden(negocioordenValidator)
module.exports = makeNegocioOrden
