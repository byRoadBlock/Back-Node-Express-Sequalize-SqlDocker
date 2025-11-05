let buildMakeInfraestructura = require('./infraestructura')
let infraestructuraSchema = require('./infraestructura-schema')
let infraestructuraValidator = require('../validator/')(infraestructuraSchema)

let makeInfraestructura = buildMakeInfraestructura(infraestructuraValidator)
module.exports = makeInfraestructura
