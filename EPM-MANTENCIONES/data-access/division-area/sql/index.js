let repoDivisionArea = require('../../../db/sql/models/division-area') 
let modeloDivisionArea = require('../../../models/division-area/index') 
let divisionareaDto = require('./serializer') 

let getAll = async () => {
    return repoDivisionArea.findAll({}).then(divisionareaDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoDivisionArea.findAll({where : { [prop]: val}})
    return divisionareaDto(resp[0])
}

let add = async (DivisionAreaInfo) => {
    let divisionarea = modeloDivisionArea(DivisionAreaInfo)

    let newDivisionArea = {
        IdDivision: divisionarea.getIdDivision(),
        IdArea: divisionarea.getIdArea(),
        Descripcion: divisionarea.getDescripcion(),
        Estado: divisionarea.getEstado(),
        CreacionFecha: divisionarea.getCreacionFecha(),
        CreacionUsuario: divisionarea.getCreacionUsuario(),
        EdicionFecha: divisionarea.getEdicionFecha(),
        EdicionUsuario: divisionarea.getEdicionUsuario(),
    }
    return repoDivisionArea.create(newDivisionArea).then(divisionareaDto)
}

let update = async (id, DivisionAreaInfo) => {
    let divisionarea = modeloDivisionArea(DivisionAreaInfo)

    let updateDivisionArea = {
        IdDivision: divisionarea.getIdDivision(),
        IdArea: divisionarea.getIdArea(),
        Descripcion: divisionarea.getDescripcion(),
        Estado: divisionarea.getEstado(),
        CreacionFecha: divisionarea.getCreacionFecha(),
        CreacionUsuario: divisionarea.getCreacionUsuario(),
        EdicionFecha: divisionarea.getEdicionFecha(),
        EdicionUsuario: divisionarea.getEdicionUsuario(),
    }
    return repoDivisionArea.update(updateDivisionArea, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoDivisionArea.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
