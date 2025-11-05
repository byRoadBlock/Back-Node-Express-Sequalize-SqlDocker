let repoTipoCargo = require('../../../db/sql/models/tipo-cargo') 
let modeloTipoCargo = require('../../../models/tipo-cargo/index') 
let tipocargoDto = require('./serializer') 

let getAll = async () => {
    return repoTipoCargo.findAll({}).then(tipocargoDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoTipoCargo.findAll({where : { [prop]: val}})
    return tipocargoDto(resp[0])
}

let add = async (TipoCargoInfo) => {
    let tipocargo = modeloTipoCargo(TipoCargoInfo)

    let newTipoCargo = {
        IdTipo: tipocargo.getIdTipo(),
        Nombre: tipocargo.getNombre(),
        Descripcion: tipocargo.getDescripcion(),
        Estado: tipocargo.getEstado(),
        CreacionFecha: tipocargo.getCreacionFecha(),
        CreacionUsuario: tipocargo.getCreacionUsuario(),
        ModificacionFecha: tipocargo.getModificacionFecha(),
        ModificacionUsuario: tipocargo.getModificacionUsuario(),
    }
    return repoTipoCargo.create(newTipoCargo).then(tipocargoDto)
}

let update = async (id, TipoCargoInfo) => {
    let tipocargo = modeloTipoCargo(TipoCargoInfo)

    let updateTipoCargo = {
        IdTipo: tipocargo.getIdTipo(),
        Nombre: tipocargo.getNombre(),
        Descripcion: tipocargo.getDescripcion(),
        Estado: tipocargo.getEstado(),
        CreacionFecha: tipocargo.getCreacionFecha(),
        CreacionUsuario: tipocargo.getCreacionUsuario(),
        ModificacionFecha: tipocargo.getModificacionFecha(),
        ModificacionUsuario: tipocargo.getModificacionUsuario(),
    }
    return repoTipoCargo.update(updateTipoCargo, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoTipoCargo.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
