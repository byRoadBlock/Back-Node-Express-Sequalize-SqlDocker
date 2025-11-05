let repoNegocioOrden = require('../../../db/sql/models/negocio-orden') 
let modeloNegocioOrden = require('../../../models/negocio-orden/index') 
let negocioordenDto = require('./serializer') 

let getAll = async () => {
    return repoNegocioOrden.findAll({}).then(negocioordenDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoNegocioOrden.findAll({where : { [prop]: val}})
    return negocioordenDto(resp[0])
}

let add = async (NegocioOrdenInfo) => {
    let negocioorden = modeloNegocioOrden(NegocioOrdenInfo)

    let newNegocioOrden = {
        IdNegocio: negocioorden.getIdNegocio(),
        IdServicio: negocioorden.getIdServicio(),
        IdOrden: negocioorden.getIdOrden(),
        Estado: negocioorden.getEstado(),
        CreacionFecha: negocioorden.getCreacionFecha(),
        CreacionUsuario: negocioorden.getCreacionUsuario(),
        EdicionFecha: negocioorden.getEdicionFecha(),
        EdicionUsuario: negocioorden.getEdicionUsuario(),
    }
    return repoNegocioOrden.create(newNegocioOrden).then(negocioordenDto)
}

let update = async (id, NegocioOrdenInfo) => {
    let negocioorden = modeloNegocioOrden(NegocioOrdenInfo)

    let updateNegocioOrden = {
        IdNegocio: negocioorden.getIdNegocio(),
        IdServicio: negocioorden.getIdServicio(),
        IdOrden: negocioorden.getIdOrden(),
        Estado: negocioorden.getEstado(),
        CreacionFecha: negocioorden.getCreacionFecha(),
        CreacionUsuario: negocioorden.getCreacionUsuario(),
        EdicionFecha: negocioorden.getEdicionFecha(),
        EdicionUsuario: negocioorden.getEdicionUsuario(),
    }
    return repoNegocioOrden.update(updateNegocioOrden, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoNegocioOrden.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
