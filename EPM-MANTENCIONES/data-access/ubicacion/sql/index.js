let repoUbicacion = require('../../../db/sql/models/ubicacion') 
let modeloUbicacion = require('../../../models/ubicacion/index') 
let ubicacionDto = require('./serializer') 

let getAll = async () => {
    return repoUbicacion.findAll({}).then(ubicacionDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoUbicacion.findAll({where : { [prop]: val}})
    return ubicacionDto(resp[0])
}

let add = async (UbicacionInfo) => {
    let ubicacion = modeloUbicacion(UbicacionInfo)

    let newUbicacion = {
        IdUbicacion: ubicacion.getIdUbicacion(),
        IdTipo: ubicacion.getIdTipo(),
        Nombre: ubicacion.getNombre(),
        Descripcion: ubicacion.getDescripcion(),
        Estado: ubicacion.getEstado(),
        CreacionFecha: ubicacion.getCreacionFecha(),
        CreacionUsuario: ubicacion.getCreacionUsuario(),
        EdicionFecha: ubicacion.getEdicionFecha(),
        EdicionUsuario: ubicacion.getEdicionUsuario(),
    }
    return repoUbicacion.create(newUbicacion).then(ubicacionDto)
}

let update = async (id, UbicacionInfo) => {
    let ubicacion = modeloUbicacion(UbicacionInfo)

    let updateUbicacion = {
        IdUbicacion: ubicacion.getIdUbicacion(),
        IdTipo: ubicacion.getIdTipo(),
        Nombre: ubicacion.getNombre(),
        Descripcion: ubicacion.getDescripcion(),
        Estado: ubicacion.getEstado(),
        CreacionFecha: ubicacion.getCreacionFecha(),
        CreacionUsuario: ubicacion.getCreacionUsuario(),
        EdicionFecha: ubicacion.getEdicionFecha(),
        EdicionUsuario: ubicacion.getEdicionUsuario(),
    }
    return repoUbicacion.update(updateUbicacion, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoUbicacion.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
