let buildMakeTipoInfraestructura = require('./tipo-infraestructura')
let tipoinfraestructuraSchema = require('./tipo-infraestructura-schema')
let tipoinfraestructuraValidator = require('../validator/')(tipoinfraestructuraSchema)

let makeTipoInfraestructura = buildMakeTipoInfraestructura(tipoinfraestructuraValidator)
module.exports = makeTipoInfraestructura
