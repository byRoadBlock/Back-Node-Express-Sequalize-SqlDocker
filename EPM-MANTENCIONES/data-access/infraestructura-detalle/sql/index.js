let repoInfraestructuraDetalle = require('../../../db/sql/models/infraestructura-detalle') 
let modeloInfraestructuraDetalle = require('../../../models/infraestructura-detalle/index') 
let infraestructuradetalleDto = require('./serializer') 

let getAll = async () => {
    return repoInfraestructuraDetalle.findAll({}).then(infraestructuradetalleDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoInfraestructuraDetalle.findAll({where : { [prop]: val}})
    return infraestructuradetalleDto(resp[0])
}

let add = async (InfraestructuraDetalleInfo) => {
    let infraestructuradetalle = modeloInfraestructuraDetalle(InfraestructuraDetalleInfo)

    let newInfraestructuraDetalle = {
        IdInfraestructura: infraestructuradetalle.getIdInfraestructura(),
        IdDetalle: infraestructuradetalle.getIdDetalle(),
        IdTipo: infraestructuradetalle.getIdTipo(),
        Nombre: infraestructuradetalle.getNombre(),
        Descripcion: infraestructuradetalle.getDescripcion(),
        Estado: infraestructuradetalle.getEstado(),
        CreacionFecha: infraestructuradetalle.getCreacionFecha(),
        CreacionUsuario: infraestructuradetalle.getCreacionUsuario(),
        EdicionFecha: infraestructuradetalle.getEdicionFecha(),
        EdicionUsuario: infraestructuradetalle.getEdicionUsuario(),
    }
    return repoInfraestructuraDetalle.create(newInfraestructuraDetalle).then(infraestructuradetalleDto)
}

let update = async (id, InfraestructuraDetalleInfo) => {
    let infraestructuradetalle = modeloInfraestructuraDetalle(InfraestructuraDetalleInfo)

    let updateInfraestructuraDetalle = {
        IdInfraestructura: infraestructuradetalle.getIdInfraestructura(),
        IdDetalle: infraestructuradetalle.getIdDetalle(),
        IdTipo: infraestructuradetalle.getIdTipo(),
        Nombre: infraestructuradetalle.getNombre(),
        Descripcion: infraestructuradetalle.getDescripcion(),
        Estado: infraestructuradetalle.getEstado(),
        CreacionFecha: infraestructuradetalle.getCreacionFecha(),
        CreacionUsuario: infraestructuradetalle.getCreacionUsuario(),
        EdicionFecha: infraestructuradetalle.getEdicionFecha(),
        EdicionUsuario: infraestructuradetalle.getEdicionUsuario(),
    }
    return repoInfraestructuraDetalle.update(updateInfraestructuraDetalle, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoInfraestructuraDetalle.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
