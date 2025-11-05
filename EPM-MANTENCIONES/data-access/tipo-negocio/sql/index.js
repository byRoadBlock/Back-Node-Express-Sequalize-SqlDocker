let repoTipoNegocio = require('../../../db/sql/models/tipo-negocio') 
let modeloTipoNegocio = require('../../../models/tipo-negocio/index') 
let tiponegocioDto = require('./serializer') 

let getAll = async () => {
    return repoTipoNegocio.findAll({}).then(tiponegocioDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoTipoNegocio.findAll({where : { [prop]: val}})
    return tiponegocioDto(resp[0])
}

let add = async (TipoNegocioInfo) => {
    let tiponegocio = modeloTipoNegocio(TipoNegocioInfo)

    let newTipoNegocio = {
        IdTipo: tiponegocio.getIdTipo(),
        Nombre: tiponegocio.getNombre(),
        Descripcion: tiponegocio.getDescripcion(),
        Estado: tiponegocio.getEstado(),
        CreacionFecha: tiponegocio.getCreacionFecha(),
        CreacionUsuario: tiponegocio.getCreacionUsuario(),
        ModificacionFecha: tiponegocio.getModificacionFecha(),
        ModificacionUsuario: tiponegocio.getModificacionUsuario(),
    }
    return repoTipoNegocio.create(newTipoNegocio).then(tiponegocioDto)
}

let update = async (id, TipoNegocioInfo) => {
    let tiponegocio = modeloTipoNegocio(TipoNegocioInfo)

    let updateTipoNegocio = {
        IdTipo: tiponegocio.getIdTipo(),
        Nombre: tiponegocio.getNombre(),
        Descripcion: tiponegocio.getDescripcion(),
        Estado: tiponegocio.getEstado(),
        CreacionFecha: tiponegocio.getCreacionFecha(),
        CreacionUsuario: tiponegocio.getCreacionUsuario(),
        ModificacionFecha: tiponegocio.getModificacionFecha(),
        ModificacionUsuario: tiponegocio.getModificacionUsuario(),
    }
    return repoTipoNegocio.update(updateTipoNegocio, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoTipoNegocio.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
