let repoTipoOrden = require('../../../db/sql/models/tipo-orden') 
let modeloTipoOrden = require('../../../models/tipo-orden/index') 
let tipoordenDto = require('./serializer') 

let getAll = async () => {
    return repoTipoOrden.findAll({}).then(tipoordenDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoTipoOrden.findAll({where : { [prop]: val}})
    return tipoordenDto(resp[0])
}

let add = async (TipoOrdenInfo) => {
    let tipoorden = modeloTipoOrden(TipoOrdenInfo)

    let newTipoOrden = {
        IdTipo: tipoorden.getIdTipo(),
        Nombre: tipoorden.getNombre(),
        Descripcion: tipoorden.getDescripcion(),
        Estado: tipoorden.getEstado(),
        CreacionFecha: tipoorden.getCreacionFecha(),
        CreacionUsuario: tipoorden.getCreacionUsuario(),
        EdicionFecha: tipoorden.getEdicionFecha(),
        EdicionUsuario: tipoorden.getEdicionUsuario(),
    }
    return repoTipoOrden.create(newTipoOrden).then(tipoordenDto)
}

let update = async (id, TipoOrdenInfo) => {
    let tipoorden = modeloTipoOrden(TipoOrdenInfo)

    let updateTipoOrden = {
        IdTipo: tipoorden.getIdTipo(),
        Nombre: tipoorden.getNombre(),
        Descripcion: tipoorden.getDescripcion(),
        Estado: tipoorden.getEstado(),
        CreacionFecha: tipoorden.getCreacionFecha(),
        CreacionUsuario: tipoorden.getCreacionUsuario(),
        EdicionFecha: tipoorden.getEdicionFecha(),
        EdicionUsuario: tipoorden.getEdicionUsuario(),
    }
    return repoTipoOrden.update(updateTipoOrden, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoTipoOrden.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
