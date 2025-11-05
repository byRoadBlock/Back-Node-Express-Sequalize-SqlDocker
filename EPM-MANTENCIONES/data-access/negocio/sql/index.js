let repoNegocio = require('../../../db/sql/models/negocio') 
let modeloNegocio = require('../../../models/negocio/index') 
let negocioDto = require('./serializer') 

let getAll = async () => {
    return repoNegocio.findAll({}).then(negocioDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoNegocio.findAll({where : { [prop]: val}})
    return negocioDto(resp[0])
}

let add = async (NegocioInfo) => {
    let negocio = modeloNegocio(NegocioInfo)

    let newNegocio = {
        IdNegocio: negocio.getIdNegocio(),
        IdTipo: negocio.getIdTipo(),
        Nombre: negocio.getNombre(),
        Descripcion: negocio.getDescripcion(),
        Estado: negocio.getEstado(),
        CreacionFecha: negocio.getCreacionFecha(),
        CreacionUsuario: negocio.getCreacionUsuario(),
        EdicionFecha: negocio.getEdicionFecha(),
        EdicionUsuario: negocio.getEdicionUsuario(),
    }
    return repoNegocio.create(newNegocio).then(negocioDto)
}

let update = async (id, NegocioInfo) => {
    let negocio = modeloNegocio(NegocioInfo)

    let updateNegocio = {
        IdNegocio: negocio.getIdNegocio(),
        IdTipo: negocio.getIdTipo(),
        Nombre: negocio.getNombre(),
        Descripcion: negocio.getDescripcion(),
        Estado: negocio.getEstado(),
        CreacionFecha: negocio.getCreacionFecha(),
        CreacionUsuario: negocio.getCreacionUsuario(),
        EdicionFecha: negocio.getEdicionFecha(),
        EdicionUsuario: negocio.getEdicionUsuario(),
    }
    return repoNegocio.update(updateNegocio, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoNegocio.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
