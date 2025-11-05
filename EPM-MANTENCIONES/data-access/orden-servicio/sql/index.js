let repoOrdenServicio = require('../../../db/sql/models/orden-servicio') 
let modeloOrdenServicio = require('../../../models/orden-servicio/index') 
let ordenservicioDto = require('./serializer') 

let getAll = async () => {
    return repoOrdenServicio.findAll({}).then(ordenservicioDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoOrdenServicio.findAll({where : { [prop]: val}})
    return ordenservicioDto(resp[0])
}

let add = async (OrdenServicioInfo) => {
    let ordenservicio = modeloOrdenServicio(OrdenServicioInfo)

    let newOrdenServicio = {
        IdOrden: ordenservicio.getIdOrden(),
        IdServicio: ordenservicio.getIdServicio(),
        IdDetalle: ordenservicio.getIdDetalle(),
        IdEstado: ordenservicio.getIdEstado(),
        CreacionFecha: ordenservicio.getCreacionFecha(),
        CreacionUsuario: ordenservicio.getCreacionUsuario(),
        EdicionFecha: ordenservicio.getEdicionFecha(),
        EdicionUsuario: ordenservicio.getEdicionUsuario(),
    }
    return repoOrdenServicio.create(newOrdenServicio).then(ordenservicioDto)
}

let update = async (id, OrdenServicioInfo) => {
    let ordenservicio = modeloOrdenServicio(OrdenServicioInfo)

    let updateOrdenServicio = {
        IdOrden: ordenservicio.getIdOrden(),
        IdServicio: ordenservicio.getIdServicio(),
        IdDetalle: ordenservicio.getIdDetalle(),
        IdEstado: ordenservicio.getIdEstado(),
        CreacionFecha: ordenservicio.getCreacionFecha(),
        CreacionUsuario: ordenservicio.getCreacionUsuario(),
        EdicionFecha: ordenservicio.getEdicionFecha(),
        EdicionUsuario: ordenservicio.getEdicionUsuario(),
    }
    return repoOrdenServicio.update(updateOrdenServicio, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoOrdenServicio.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
