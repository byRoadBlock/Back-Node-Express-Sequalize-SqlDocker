let buildMakeDivisionArea = require('./division-area')
let divisionareaSchema = require('./division-area-schema')
let divisionareaValidator = require('../validator/')(divisionareaSchema)

let makeDivisionArea = buildMakeDivisionArea(divisionareaValidator)
module.exports = makeDivisionArea
