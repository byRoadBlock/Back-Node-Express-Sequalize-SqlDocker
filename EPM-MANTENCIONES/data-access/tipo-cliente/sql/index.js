let repoTipoCliente = require('../../../db/sql/models/tipo-cliente') 
let modeloTipoCliente = require('../../../models/tipo-cliente/index') 
let tipoclienteDto = require('./serializer') 

let getAll = async () => {
    return repoTipoCliente.findAll({}).then(tipoclienteDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoTipoCliente.findAll({where : { [prop]: val}})
    return tipoclienteDto(resp[0])
}

let add = async (TipoClienteInfo) => {
    let tipocliente = modeloTipoCliente(TipoClienteInfo)

    let newTipoCliente = {
        IdTipo: tipocliente.getIdTipo(),
        Nombre: tipocliente.getNombre(),
        Descripcion: tipocliente.getDescripcion(),
        Estado: tipocliente.getEstado(),
        CreacionFecha: tipocliente.getCreacionFecha(),
        CreacionUsuario: tipocliente.getCreacionUsuario(),
        ModificacionFecha: tipocliente.getModificacionFecha(),
        ModificacionUsuario: tipocliente.getModificacionUsuario(),
    }
    return repoTipoCliente.create(newTipoCliente).then(tipoclienteDto)
}

let update = async (id, TipoClienteInfo) => {
    let tipocliente = modeloTipoCliente(TipoClienteInfo)

    let updateTipoCliente = {
        IdTipo: tipocliente.getIdTipo(),
        Nombre: tipocliente.getNombre(),
        Descripcion: tipocliente.getDescripcion(),
        Estado: tipocliente.getEstado(),
        CreacionFecha: tipocliente.getCreacionFecha(),
        CreacionUsuario: tipocliente.getCreacionUsuario(),
        ModificacionFecha: tipocliente.getModificacionFecha(),
        ModificacionUsuario: tipocliente.getModificacionUsuario(),
    }
    return repoTipoCliente.update(updateTipoCliente, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoTipoCliente.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
