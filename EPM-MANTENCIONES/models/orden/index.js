let buildMakeOrden = require('./orden')
let ordenSchema = require('./orden-schema')
let ordenValidator = require('../validator/')(ordenSchema)

let makeOrden = buildMakeOrden(ordenValidator)
module.exports = makeOrden
