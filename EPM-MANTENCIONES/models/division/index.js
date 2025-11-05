let buildMakeDivision = require('./division')
let divisionSchema = require('./division-schema')
let divisionValidator = require('../validator/')(divisionSchema)

let makeDivision = buildMakeDivision(divisionValidator)
module.exports = makeDivision
