let repoNegocioDetalle = require('../../../db/sql/models/negocio-detalle') 
let modeloNegocioDetalle = require('../../../models/negocio-detalle/index') 
let negociodetalleDto = require('./serializer') 

let getAll = async () => {
    return repoNegocioDetalle.findAll({}).then(negociodetalleDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoNegocioDetalle.findAll({where : { [prop]: val}})
    return negociodetalleDto(resp[0])
}

let add = async (NegocioDetalleInfo) => {
    let negociodetalle = modeloNegocioDetalle(NegocioDetalleInfo)

    let newNegocioDetalle = {
        IdDetalle: negociodetalle.getIdDetalle(),
        IdNegocio: negociodetalle.getIdNegocio(),
        IdServicio: negociodetalle.getIdServicio(),
        Nombre: negociodetalle.getNombre(),
        Descripcion: negociodetalle.getDescripcion(),
        Estado: negociodetalle.getEstado(),
        CreacionFecha: negociodetalle.getCreacionFecha(),
        CreacionUsuario: negociodetalle.getCreacionUsuario(),
        EdicionFecha: negociodetalle.getEdicionFecha(),
        EdicionUsuario: negociodetalle.getEdicionUsuario(),
    }
    return repoNegocioDetalle.create(newNegocioDetalle).then(negociodetalleDto)
}

let update = async (id, NegocioDetalleInfo) => {
    let negociodetalle = modeloNegocioDetalle(NegocioDetalleInfo)

    let updateNegocioDetalle = {
        IdDetalle: negociodetalle.getIdDetalle(),
        IdNegocio: negociodetalle.getIdNegocio(),
        IdServicio: negociodetalle.getIdServicio(),
        Nombre: negociodetalle.getNombre(),
        Descripcion: negociodetalle.getDescripcion(),
        Estado: negociodetalle.getEstado(),
        CreacionFecha: negociodetalle.getCreacionFecha(),
        CreacionUsuario: negociodetalle.getCreacionUsuario(),
        EdicionFecha: negociodetalle.getEdicionFecha(),
        EdicionUsuario: negociodetalle.getEdicionUsuario(),
    }
    return repoNegocioDetalle.update(updateNegocioDetalle, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoNegocioDetalle.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
