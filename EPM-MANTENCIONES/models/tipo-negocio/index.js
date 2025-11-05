let buildMakeTipoNegocio = require('./tipo-negocio')
let tiponegocioSchema = require('./tipo-negocio-schema')
let tiponegocioValidator = require('../validator/')(tiponegocioSchema)

let makeTipoNegocio = buildMakeTipoNegocio(tiponegocioValidator)
module.exports = makeTipoNegocio
