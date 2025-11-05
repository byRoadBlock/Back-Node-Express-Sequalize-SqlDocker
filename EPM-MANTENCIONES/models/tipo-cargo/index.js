let buildMakeTipoCargo = require('./tipo-cargo')
let tipocargoSchema = require('./tipo-cargo-schema')
let tipocargoValidator = require('../validator/')(tipocargoSchema)

let makeTipoCargo = buildMakeTipoCargo(tipocargoValidator)
module.exports = makeTipoCargo
