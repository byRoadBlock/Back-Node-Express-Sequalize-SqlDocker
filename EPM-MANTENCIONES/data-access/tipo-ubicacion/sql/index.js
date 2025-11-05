let repoTipoUbicacion = require('../../../db/sql/models/tipo-ubicacion') 
let modeloTipoUbicacion = require('../../../models/tipo-ubicacion/index') 
let tipoubicacionDto = require('./serializer') 

let getAll = async () => {
    return repoTipoUbicacion.findAll({}).then(tipoubicacionDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoTipoUbicacion.findAll({where : { [prop]: val}})
    return tipoubicacionDto(resp[0])
}

let add = async (TipoUbicacionInfo) => {
    let tipoubicacion = modeloTipoUbicacion(TipoUbicacionInfo)

    let newTipoUbicacion = {
        IdTipo: tipoubicacion.getIdTipo(),
        Nombre: tipoubicacion.getNombre(),
        Descripcion: tipoubicacion.getDescripcion(),
        Estado: tipoubicacion.getEstado(),
        CreacionFecha: tipoubicacion.getCreacionFecha(),
        CreacionUsuario: tipoubicacion.getCreacionUsuario(),
        EdicionFecha: tipoubicacion.getEdicionFecha(),
        EdicionUsuario: tipoubicacion.getEdicionUsuario(),
    }
    return repoTipoUbicacion.create(newTipoUbicacion).then(tipoubicacionDto)
}

let update = async (id, TipoUbicacionInfo) => {
    let tipoubicacion = modeloTipoUbicacion(TipoUbicacionInfo)

    let updateTipoUbicacion = {
        IdTipo: tipoubicacion.getIdTipo(),
        Nombre: tipoubicacion.getNombre(),
        Descripcion: tipoubicacion.getDescripcion(),
        Estado: tipoubicacion.getEstado(),
        CreacionFecha: tipoubicacion.getCreacionFecha(),
        CreacionUsuario: tipoubicacion.getCreacionUsuario(),
        EdicionFecha: tipoubicacion.getEdicionFecha(),
        EdicionUsuario: tipoubicacion.getEdicionUsuario(),
    }
    return repoTipoUbicacion.update(updateTipoUbicacion, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoTipoUbicacion.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
