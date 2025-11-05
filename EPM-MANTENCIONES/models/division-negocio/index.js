let buildMakeDivisionNegocio = require('./division-negocio')
let divisionnegocioSchema = require('./division-negocio-schema')
let divisionnegocioValidator = require('../validator/')(divisionnegocioSchema)

let makeDivisionNegocio = buildMakeDivisionNegocio(divisionnegocioValidator)
module.exports = makeDivisionNegocio
