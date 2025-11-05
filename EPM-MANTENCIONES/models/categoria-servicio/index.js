let buildMakeCategoriaServicio = require('./categoria-servicio')
let categoriaservicioSchema = require('./categoria-servicio-schema')
let categoriaservicioValidator = require('../validator/')(categoriaservicioSchema)

let makeCategoriaServicio = buildMakeCategoriaServicio(categoriaservicioValidator)
module.exports = makeCategoriaServicio
