let repoClienteDetalle = require('../../../db/sql/models/cliente-detalle') 
let modeloClienteDetalle = require('../../../models/cliente-detalle/index') 
let clientedetalleDto = require('./serializer') 

let getAll = async () => {
    return repoClienteDetalle.findAll({}).then(clientedetalleDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoClienteDetalle.findAll({where : { [prop]: val}})
    return clientedetalleDto(resp[0])
}

let add = async (ClienteDetalleInfo) => {
    let clientedetalle = modeloClienteDetalle(ClienteDetalleInfo)

    let newClienteDetalle = {
        IdCliente: clientedetalle.getIdCliente(),
        IdDetalle: clientedetalle.getIdDetalle(),
        IdTipo: clientedetalle.getIdTipo(),
        Nombre: clientedetalle.getNombre(),
        Descripcion: clientedetalle.getDescripcion(),
        Estado: clientedetalle.getEstado(),
        CreacionFecha: clientedetalle.getCreacionFecha(),
        CreacionUsuario: clientedetalle.getCreacionUsuario(),
        EdicionFecha: clientedetalle.getEdicionFecha(),
        EdicionUsuario: clientedetalle.getEdicionUsuario(),
    }
    return repoClienteDetalle.create(newClienteDetalle).then(clientedetalleDto)
}

let update = async (id, ClienteDetalleInfo) => {
    let clientedetalle = modeloClienteDetalle(ClienteDetalleInfo)

    let updateClienteDetalle = {
        IdCliente: clientedetalle.getIdCliente(),
        IdDetalle: clientedetalle.getIdDetalle(),
        IdTipo: clientedetalle.getIdTipo(),
        Nombre: clientedetalle.getNombre(),
        Descripcion: clientedetalle.getDescripcion(),
        Estado: clientedetalle.getEstado(),
        CreacionFecha: clientedetalle.getCreacionFecha(),
        CreacionUsuario: clientedetalle.getCreacionUsuario(),
        EdicionFecha: clientedetalle.getEdicionFecha(),
        EdicionUsuario: clientedetalle.getEdicionUsuario(),
    }
    return repoClienteDetalle.update(updateClienteDetalle, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoClienteDetalle.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
