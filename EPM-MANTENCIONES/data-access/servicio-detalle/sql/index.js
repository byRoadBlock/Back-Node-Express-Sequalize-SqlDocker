let repoServicioDetalle = require('../../../db/sql/models/servicio-detalle') 
let modeloServicioDetalle = require('../../../models/servicio-detalle/index') 
let serviciodetalleDto = require('./serializer') 

let getAll = async () => {
    return repoServicioDetalle.findAll({}).then(serviciodetalleDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoServicioDetalle.findAll({where : { [prop]: val}})
    return serviciodetalleDto(resp[0])
}

let add = async (ServicioDetalleInfo) => {
    let serviciodetalle = modeloServicioDetalle(ServicioDetalleInfo)

    let newServicioDetalle = {
        IdServicio: serviciodetalle.getIdServicio(),
        IdDetalle: serviciodetalle.getIdDetalle(),
        Descripcion: serviciodetalle.getDescripcion(),
        Valor: serviciodetalle.getValor(),
        Estado: serviciodetalle.getEstado(),
        CreacionFecha: serviciodetalle.getCreacionFecha(),
        CreacionUsuario: serviciodetalle.getCreacionUsuario(),
        EdicionFecha: serviciodetalle.getEdicionFecha(),
        EdicionUsuario: serviciodetalle.getEdicionUsuario(),
    }
    return repoServicioDetalle.create(newServicioDetalle).then(serviciodetalleDto)
}

let update = async (id, ServicioDetalleInfo) => {
    let serviciodetalle = modeloServicioDetalle(ServicioDetalleInfo)

    let updateServicioDetalle = {
        IdServicio: serviciodetalle.getIdServicio(),
        IdDetalle: serviciodetalle.getIdDetalle(),
        Descripcion: serviciodetalle.getDescripcion(),
        Valor: serviciodetalle.getValor(),
        Estado: serviciodetalle.getEstado(),
        CreacionFecha: serviciodetalle.getCreacionFecha(),
        CreacionUsuario: serviciodetalle.getCreacionUsuario(),
        EdicionFecha: serviciodetalle.getEdicionFecha(),
        EdicionUsuario: serviciodetalle.getEdicionUsuario(),
    }
    return repoServicioDetalle.update(updateServicioDetalle, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoServicioDetalle.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
