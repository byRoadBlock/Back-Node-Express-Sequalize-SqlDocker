let buildMakeAreaInfraestructura = require('./area-infraestructura')
let areainfraestructuraSchema = require('./area-infraestructura-schema')
let areainfraestructuraValidator = require('../validator/')(areainfraestructuraSchema)

let makeAreaInfraestructura = buildMakeAreaInfraestructura(areainfraestructuraValidator)
module.exports = makeAreaInfraestructura
