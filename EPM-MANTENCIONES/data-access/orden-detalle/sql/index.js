let repoOrdenDetalle = require('../../../db/sql/models/orden-detalle') 
let modeloOrdenDetalle = require('../../../models/orden-detalle/index') 
let ordendetalleDto = require('./serializer') 

let getAll = async () => {
    return repoOrdenDetalle.findAll({}).then(ordendetalleDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoOrdenDetalle.findAll({where : { [prop]: val}})
    return ordendetalleDto(resp[0])
}

let add = async (OrdenDetalleInfo) => {
    let ordendetalle = modeloOrdenDetalle(OrdenDetalleInfo)

    let newOrdenDetalle = {
        IdOrden: ordendetalle.getIdOrden(),
        IdTrabajo: ordendetalle.getIdTrabajo(),
        IdDetalle: ordendetalle.getIdDetalle(),
        Nombre: ordendetalle.getNombre(),
        Descripcion: ordendetalle.getDescripcion(),
        IdEstado: ordendetalle.getIdEstado(),
        CreacionFecha: ordendetalle.getCreacionFecha(),
        CreacionUsuario: ordendetalle.getCreacionUsuario(),
        EdicionFecha: ordendetalle.getEdicionFecha(),
        EdicionUsuario: ordendetalle.getEdicionUsuario(),
    }
    return repoOrdenDetalle.create(newOrdenDetalle).then(ordendetalleDto)
}

let update = async (id, OrdenDetalleInfo) => {
    let ordendetalle = modeloOrdenDetalle(OrdenDetalleInfo)

    let updateOrdenDetalle = {
        IdOrden: ordendetalle.getIdOrden(),
        IdTrabajo: ordendetalle.getIdTrabajo(),
        IdDetalle: ordendetalle.getIdDetalle(),
        Nombre: ordendetalle.getNombre(),
        Descripcion: ordendetalle.getDescripcion(),
        IdEstado: ordendetalle.getIdEstado(),
        CreacionFecha: ordendetalle.getCreacionFecha(),
        CreacionUsuario: ordendetalle.getCreacionUsuario(),
        EdicionFecha: ordendetalle.getEdicionFecha(),
        EdicionUsuario: ordendetalle.getEdicionUsuario(),
    }
    return repoOrdenDetalle.update(updateOrdenDetalle, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoOrdenDetalle.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
