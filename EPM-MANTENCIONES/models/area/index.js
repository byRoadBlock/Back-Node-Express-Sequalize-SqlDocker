let buildMakeArea = require('./area')
let areaSchema = require('./area-schema')
let areaValidator = require('../validator/')(areaSchema)

let makeArea = buildMakeArea(areaValidator)
module.exports = makeArea
