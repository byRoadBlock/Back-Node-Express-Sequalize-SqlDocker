let repoDivisionNegocio = require('../../../db/sql/models/division-negocio') 
let modeloDivisionNegocio = require('../../../models/division-negocio/index') 
let divisionnegocioDto = require('./serializer') 

let getAll = async () => {
    return repoDivisionNegocio.findAll({}).then(divisionnegocioDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoDivisionNegocio.findAll({where : { [prop]: val}})
    return divisionnegocioDto(resp[0])
}

let add = async (DivisionNegocioInfo) => {
    let divisionnegocio = modeloDivisionNegocio(DivisionNegocioInfo)

    let newDivisionNegocio = {
        IdDivision: divisionnegocio.getIdDivision(),
        IdNegocio: divisionnegocio.getIdNegocio(),
        Descripcion: divisionnegocio.getDescripcion(),
        Estado: divisionnegocio.getEstado(),
        CreacionFecha: divisionnegocio.getCreacionFecha(),
        CreacionUsuario: divisionnegocio.getCreacionUsuario(),
        EdicionFecha: divisionnegocio.getEdicionFecha(),
        EdicionUsuario: divisionnegocio.getEdicionUsuario(),
    }
    return repoDivisionNegocio.create(newDivisionNegocio).then(divisionnegocioDto)
}

let update = async (id, DivisionNegocioInfo) => {
    let divisionnegocio = modeloDivisionNegocio(DivisionNegocioInfo)

    let updateDivisionNegocio = {
        IdDivision: divisionnegocio.getIdDivision(),
        IdNegocio: divisionnegocio.getIdNegocio(),
        Descripcion: divisionnegocio.getDescripcion(),
        Estado: divisionnegocio.getEstado(),
        CreacionFecha: divisionnegocio.getCreacionFecha(),
        CreacionUsuario: divisionnegocio.getCreacionUsuario(),
        EdicionFecha: divisionnegocio.getEdicionFecha(),
        EdicionUsuario: divisionnegocio.getEdicionUsuario(),
    }
    return repoDivisionNegocio.update(updateDivisionNegocio, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoDivisionNegocio.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
