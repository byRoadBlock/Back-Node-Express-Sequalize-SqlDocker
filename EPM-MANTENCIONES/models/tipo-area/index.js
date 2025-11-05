let buildMakeTipoArea = require('./tipo-area')
let tipoareaSchema = require('./tipo-area-schema')
let tipoareaValidator = require('../validator/')(tipoareaSchema)

let makeTipoArea = buildMakeTipoArea(tipoareaValidator)
module.exports = makeTipoArea
