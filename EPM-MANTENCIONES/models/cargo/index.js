let buildMakeCargo = require('./cargo')
let cargoSchema = require('./cargo-schema')
let cargoValidator = require('../validator/')(cargoSchema)

let makeCargo = buildMakeCargo(cargoValidator)
module.exports = makeCargo
