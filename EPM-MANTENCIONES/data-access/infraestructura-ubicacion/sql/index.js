let repoInfraestructuraUbicacion = require('../../../db/sql/models/infraestructura-ubicacion') 
let modeloInfraestructuraUbicacion = require('../../../models/infraestructura-ubicacion/index') 
let infraestructuraubicacionDto = require('./serializer') 

let getAll = async () => {
    return repoInfraestructuraUbicacion.findAll({}).then(infraestructuraubicacionDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoInfraestructuraUbicacion.findAll({where : { [prop]: val}})
    return infraestructuraubicacionDto(resp[0])
}

let add = async (InfraestructuraUbicacionInfo) => {
    let infraestructuraubicacion = modeloInfraestructuraUbicacion(InfraestructuraUbicacionInfo)

    let newInfraestructuraUbicacion = {
        IdInfraestructura: infraestructuraubicacion.getIdInfraestructura(),
        IdUbicacion: infraestructuraubicacion.getIdUbicacion(),
        Descripcion: infraestructuraubicacion.getDescripcion(),
        Estado: infraestructuraubicacion.getEstado(),
        CreacionFecha: infraestructuraubicacion.getCreacionFecha(),
        CreacionUsuario: infraestructuraubicacion.getCreacionUsuario(),
        EdicionFecha: infraestructuraubicacion.getEdicionFecha(),
        EdicionUsuario: infraestructuraubicacion.getEdicionUsuario(),
    }
    return repoInfraestructuraUbicacion.create(newInfraestructuraUbicacion).then(infraestructuraubicacionDto)
}

let update = async (id, InfraestructuraUbicacionInfo) => {
    let infraestructuraubicacion = modeloInfraestructuraUbicacion(InfraestructuraUbicacionInfo)

    let updateInfraestructuraUbicacion = {
        IdInfraestructura: infraestructuraubicacion.getIdInfraestructura(),
        IdUbicacion: infraestructuraubicacion.getIdUbicacion(),
        Descripcion: infraestructuraubicacion.getDescripcion(),
        Estado: infraestructuraubicacion.getEstado(),
        CreacionFecha: infraestructuraubicacion.getCreacionFecha(),
        CreacionUsuario: infraestructuraubicacion.getCreacionUsuario(),
        EdicionFecha: infraestructuraubicacion.getEdicionFecha(),
        EdicionUsuario: infraestructuraubicacion.getEdicionUsuario(),
    }
    return repoInfraestructuraUbicacion.update(updateInfraestructuraUbicacion, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoInfraestructuraUbicacion.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
