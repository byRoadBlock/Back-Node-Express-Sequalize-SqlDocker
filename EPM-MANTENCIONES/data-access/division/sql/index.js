let repoDivision = require('../../../db/sql/models/division') 
let modeloDivision = require('../../../models/division/index') 
let divisionDto = require('./serializer') 

let getAll = async () => {
    return repoDivision.findAll({}).then(divisionDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoDivision.findAll({where : { [prop]: val}})
    return divisionDto(resp[0])
}

let add = async (DivisionInfo) => {
    let division = modeloDivision(DivisionInfo)

    let newDivision = {
        IdDivision: division.getIdDivision(),
        IdTipo: division.getIdTipo(),
        IdCliente: division.getIdCliente(),
        Nombre: division.getNombre(),
        Descripcion: division.getDescripcion(),
        Estado: division.getEstado(),
        CreacionFecha: division.getCreacionFecha(),
        CreacionUsuario: division.getCreacionUsuario(),
        EdicionFecha: division.getEdicionFecha(),
        EdicionUsuario: division.getEdicionUsuario(),
    }
    return repoDivision.create(newDivision).then(divisionDto)
}

let update = async (id, DivisionInfo) => {
    let division = modeloDivision(DivisionInfo)

    let updateDivision = {
        IdDivision: division.getIdDivision(),
        IdTipo: division.getIdTipo(),
        IdCliente: division.getIdCliente(),
        Nombre: division.getNombre(),
        Descripcion: division.getDescripcion(),
        Estado: division.getEstado(),
        CreacionFecha: division.getCreacionFecha(),
        CreacionUsuario: division.getCreacionUsuario(),
        EdicionFecha: division.getEdicionFecha(),
        EdicionUsuario: division.getEdicionUsuario(),
    }
    return repoDivision.update(updateDivision, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoDivision.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
