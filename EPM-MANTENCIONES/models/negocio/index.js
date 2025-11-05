let buildMakeNegocio = require('./negocio')
let negocioSchema = require('./negocio-schema')
let negocioValidator = require('../validator/')(negocioSchema)

let makeNegocio = buildMakeNegocio(negocioValidator)
module.exports = makeNegocio
