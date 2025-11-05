let buildMakeTipoDivision = require('./tipo-division')
let tipodivisionSchema = require('./tipo-division-schema')
let tipodivisionValidator = require('../validator/')(tipodivisionSchema)

let makeTipoDivision = buildMakeTipoDivision(tipodivisionValidator)
module.exports = makeTipoDivision
