let buildMakeServicio = require('./servicio')
let servicioSchema = require('./servicio-schema')
let servicioValidator = require('../validator/')(servicioSchema)

let makeServicio = buildMakeServicio(servicioValidator)
module.exports = makeServicio
