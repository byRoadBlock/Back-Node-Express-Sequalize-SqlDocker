let repoTipoEquipamiento = require('../../../db/sql/models/tipo-equipamiento') 
let modeloTipoEquipamiento = require('../../../models/tipo-equipamiento/index') 
let tipoequipamientoDto = require('./serializer') 

let getAll = async () => {
    return repoTipoEquipamiento.findAll({}).then(tipoequipamientoDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoTipoEquipamiento.findAll({where : { [prop]: val}})
    return tipoequipamientoDto(resp[0])
}

let add = async (TipoEquipamientoInfo) => {
    let tipoequipamiento = modeloTipoEquipamiento(TipoEquipamientoInfo)

    let newTipoEquipamiento = {
        IdTipo: tipoequipamiento.getIdTipo(),
        Nombre: tipoequipamiento.getNombre(),
        Descripcion: tipoequipamiento.getDescripcion(),
        Estado: tipoequipamiento.getEstado(),
        CreacionFecha: tipoequipamiento.getCreacionFecha(),
        CreacionUsuario: tipoequipamiento.getCreacionUsuario(),
        ModificacionFecha: tipoequipamiento.getModificacionFecha(),
        ModificacionUsuario: tipoequipamiento.getModificacionUsuario(),
    }
    return repoTipoEquipamiento.create(newTipoEquipamiento).then(tipoequipamientoDto)
}

let update = async (id, TipoEquipamientoInfo) => {
    let tipoequipamiento = modeloTipoEquipamiento(TipoEquipamientoInfo)

    let updateTipoEquipamiento = {
        IdTipo: tipoequipamiento.getIdTipo(),
        Nombre: tipoequipamiento.getNombre(),
        Descripcion: tipoequipamiento.getDescripcion(),
        Estado: tipoequipamiento.getEstado(),
        CreacionFecha: tipoequipamiento.getCreacionFecha(),
        CreacionUsuario: tipoequipamiento.getCreacionUsuario(),
        ModificacionFecha: tipoequipamiento.getModificacionFecha(),
        ModificacionUsuario: tipoequipamiento.getModificacionUsuario(),
    }
    return repoTipoEquipamiento.update(updateTipoEquipamiento, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoTipoEquipamiento.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
