let repoEstadoCliente = require('../../../db/sql/models/estado-cliente') 
let modeloEstadoCliente = require('../../../models/estado-cliente/index') 
let estadoclienteDto = require('./serializer') 

let getAll = async () => {
    return repoEstadoCliente.findAll({}).then(estadoclienteDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoEstadoCliente.findAll({where : { [prop]: val}})
    return estadoclienteDto(resp[0])
}

let add = async (EstadoClienteInfo) => {
    let estadocliente = modeloEstadoCliente(EstadoClienteInfo)

    let newEstadoCliente = {
        IdEstado: estadocliente.getIdEstado(),
        Nombre: estadocliente.getNombre(),
        Descripcion: estadocliente.getDescripcion(),
        Estado: estadocliente.getEstado(),
        CreacionFecha: estadocliente.getCreacionFecha(),
        CreacionUsuario: estadocliente.getCreacionUsuario(),
        EdicionFecha: estadocliente.getEdicionFecha(),
        EdicionUsuario: estadocliente.getEdicionUsuario(),
    }
    return repoEstadoCliente.create(newEstadoCliente).then(estadoclienteDto)
}

let update = async (id, EstadoClienteInfo) => {
    let estadocliente = modeloEstadoCliente(EstadoClienteInfo)

    let updateEstadoCliente = {
        IdEstado: estadocliente.getIdEstado(),
        Nombre: estadocliente.getNombre(),
        Descripcion: estadocliente.getDescripcion(),
        Estado: estadocliente.getEstado(),
        CreacionFecha: estadocliente.getCreacionFecha(),
        CreacionUsuario: estadocliente.getCreacionUsuario(),
        EdicionFecha: estadocliente.getEdicionFecha(),
        EdicionUsuario: estadocliente.getEdicionUsuario(),
    }
    return repoEstadoCliente.update(updateEstadoCliente, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoEstadoCliente.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
