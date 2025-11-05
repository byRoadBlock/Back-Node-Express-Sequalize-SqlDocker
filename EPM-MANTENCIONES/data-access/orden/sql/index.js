let repoOrden = require('../../../db/sql/models/orden') 
let modeloOrden = require('../../../models/orden/index') 
let ordenDto = require('./serializer') 

let getAll = async () => {
    return repoOrden.findAll({}).then(ordenDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoOrden.findAll({where : { [prop]: val}})
    return ordenDto(resp[0])
}

let add = async (OrdenInfo) => {
    let orden = modeloOrden(OrdenInfo)

    let newOrden = {
        IdOrden: orden.getIdOrden(),
        IdTipo: orden.getIdTipo(),
        Nombre: orden.getNombre(),
        IdEstado: orden.getIdEstado(),
        CreacionFecha: orden.getCreacionFecha(),
        CreacionUsuario: orden.getCreacionUsuario(),
        EdicionFecha: orden.getEdicionFecha(),
        EdicionUsuario: orden.getEdicionUsuario(),
    }
    return repoOrden.create(newOrden).then(ordenDto)
}

let update = async (id, OrdenInfo) => {
    let orden = modeloOrden(OrdenInfo)

    let updateOrden = {
        IdOrden: orden.getIdOrden(),
        IdTipo: orden.getIdTipo(),
        Nombre: orden.getNombre(),
        IdEstado: orden.getIdEstado(),
        CreacionFecha: orden.getCreacionFecha(),
        CreacionUsuario: orden.getCreacionUsuario(),
        EdicionFecha: orden.getEdicionFecha(),
        EdicionUsuario: orden.getEdicionUsuario(),
    }
    return repoOrden.update(updateOrden, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoOrden.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
