let repoEstadoOrden = require('../../../db/sql/models/estado-orden') 
let modeloEstadoOrden = require('../../../models/estado-orden/index') 
let estadoordenDto = require('./serializer') 

let getAll = async () => {
    return repoEstadoOrden.findAll({}).then(estadoordenDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoEstadoOrden.findAll({where : { [prop]: val}})
    return estadoordenDto(resp[0])
}

let add = async (EstadoOrdenInfo) => {
    let estadoorden = modeloEstadoOrden(EstadoOrdenInfo)

    let newEstadoOrden = {
        IdEstado: estadoorden.getIdEstado(),
        Nombre: estadoorden.getNombre(),
        Descripcion: estadoorden.getDescripcion(),
        Transaccion: estadoorden.getTransaccion(),
        Estado: estadoorden.getEstado(),
        CreacionFecha: estadoorden.getCreacionFecha(),
        CreacionUsuario: estadoorden.getCreacionUsuario(),
        EdicionFecha: estadoorden.getEdicionFecha(),
        EdicionUsuario: estadoorden.getEdicionUsuario(),
    }
    return repoEstadoOrden.create(newEstadoOrden).then(estadoordenDto)
}

let update = async (id, EstadoOrdenInfo) => {
    let estadoorden = modeloEstadoOrden(EstadoOrdenInfo)

    let updateEstadoOrden = {
        IdEstado: estadoorden.getIdEstado(),
        Nombre: estadoorden.getNombre(),
        Descripcion: estadoorden.getDescripcion(),
        Transaccion: estadoorden.getTransaccion(),
        Estado: estadoorden.getEstado(),
        CreacionFecha: estadoorden.getCreacionFecha(),
        CreacionUsuario: estadoorden.getCreacionUsuario(),
        EdicionFecha: estadoorden.getEdicionFecha(),
        EdicionUsuario: estadoorden.getEdicionUsuario(),
    }
    return repoEstadoOrden.update(updateEstadoOrden, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoEstadoOrden.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
