let repoTipoArea = require('../../../db/sql/models/tipo-area') 
let modeloTipoArea = require('../../../models/tipo-area/index') 
let tipoareaDto = require('./serializer') 

let getAll = async () => {
    return repoTipoArea.findAll({}).then(tipoareaDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoTipoArea.findAll({where : { [prop]: val}})
    return tipoareaDto(resp[0])
}

let add = async (TipoAreaInfo) => {
    let tipoarea = modeloTipoArea(TipoAreaInfo)

    let newTipoArea = {
        IdTipo: tipoarea.getIdTipo(),
        Nombre: tipoarea.getNombre(),
        Descripcion: tipoarea.getDescripcion(),
        Estado: tipoarea.getEstado(),
        CreacionFecha: tipoarea.getCreacionFecha(),
        CreacionUsuario: tipoarea.getCreacionUsuario(),
        ModificacionFecha: tipoarea.getModificacionFecha(),
        ModificacionUsuario: tipoarea.getModificacionUsuario(),
    }
    return repoTipoArea.create(newTipoArea).then(tipoareaDto)
}

let update = async (id, TipoAreaInfo) => {
    let tipoarea = modeloTipoArea(TipoAreaInfo)

    let updateTipoArea = {
        IdTipo: tipoarea.getIdTipo(),
        Nombre: tipoarea.getNombre(),
        Descripcion: tipoarea.getDescripcion(),
        Estado: tipoarea.getEstado(),
        CreacionFecha: tipoarea.getCreacionFecha(),
        CreacionUsuario: tipoarea.getCreacionUsuario(),
        ModificacionFecha: tipoarea.getModificacionFecha(),
        ModificacionUsuario: tipoarea.getModificacionUsuario(),
    }
    return repoTipoArea.update(updateTipoArea, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoTipoArea.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
