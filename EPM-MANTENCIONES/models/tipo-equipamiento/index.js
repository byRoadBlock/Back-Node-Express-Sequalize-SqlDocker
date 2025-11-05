let buildMakeTipoEquipamiento = require('./tipo-equipamiento')
let tipoequipamientoSchema = require('./tipo-equipamiento-schema')
let tipoequipamientoValidator = require('../validator/')(tipoequipamientoSchema)

let makeTipoEquipamiento = buildMakeTipoEquipamiento(tipoequipamientoValidator)
module.exports = makeTipoEquipamiento
