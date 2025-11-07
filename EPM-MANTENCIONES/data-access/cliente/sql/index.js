let repoCliente = require('../../../db/sql/models/cliente') 
let modeloCliente = require('../../../models/cliente/index') 
let clienteDto = require('./serializer') 

let getAll = async () => {
    return repoCliente.findAll({}).then(clienteDto)
}

let find = async (prop, val) => {
    if(prop == 'IdCliente') prop = 'IdCliented'
    const resp = await repoCliente.findAll({where : { [prop]: val}})
    return clienteDto(resp[0])
}

let add = async (ClienteInfo) => {

    let cliente = modeloCliente(ClienteInfo)

    let newCliente = {
        IdCliente: cliente.getIdCliente(),
        Estado: cliente.getEstado(),
        CreacionFecha: cliente.getCreacionFecha(),
        CreacionUsuario: cliente.getCreacionUsuario(),
        EdicionFecha: cliente.getEdicionFecha(),
        EdicionUsuario: cliente.getEdicionUsuario(),
    }
    
    return repoCliente.create(newCliente).then(clienteDto)
}

let update = async (id, ClienteInfo) => {
    let cliente = modeloCliente(ClienteInfo)

    let updateCliente = {
        IdCliente: cliente.getIdCliente(),
        Estado: cliente.getEstado(),
        CreacionFecha: cliente.getCreacionFecha(),
        CreacionUsuario: cliente.getCreacionUsuario(),
        EdicionFecha: cliente.getEdicionFecha(),
        EdicionUsuario: cliente.getEdicionUsuario(),
    }
    return repoCliente.update(updateCliente, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoCliente.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
