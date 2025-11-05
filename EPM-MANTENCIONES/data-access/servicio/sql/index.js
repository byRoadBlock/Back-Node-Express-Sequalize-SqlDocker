let repoServicio = require('../../../db/sql/models/servicio') 
let modeloServicio = require('../../../models/servicio/index') 
let servicioDto = require('./serializer') 

let getAll = async () => {
    return repoServicio.findAll({}).then(servicioDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoServicio.findAll({where : { [prop]: val}})
    return servicioDto(resp[0])
}

let add = async (ServicioInfo) => {
    let servicio = modeloServicio(ServicioInfo)

    let newServicio = {
        IdServicio: servicio.getIdServicio(),
        IdTipo: servicio.getIdTipo(),
        Nombre: servicio.getNombre(),
        Descripcion: servicio.getDescripcion(),
        Estado: servicio.getEstado(),
        CreacionFecha: servicio.getCreacionFecha(),
        CreacionUsuario: servicio.getCreacionUsuario(),
        EdicionFecha: servicio.getEdicionFecha(),
        EdicionUsuario: servicio.getEdicionUsuario(),
    }
    return repoServicio.create(newServicio).then(servicioDto)
}

let update = async (id, ServicioInfo) => {
    let servicio = modeloServicio(ServicioInfo)

    let updateServicio = {
        IdServicio: servicio.getIdServicio(),
        IdTipo: servicio.getIdTipo(),
        Nombre: servicio.getNombre(),
        Descripcion: servicio.getDescripcion(),
        Estado: servicio.getEstado(),
        CreacionFecha: servicio.getCreacionFecha(),
        CreacionUsuario: servicio.getCreacionUsuario(),
        EdicionFecha: servicio.getEdicionFecha(),
        EdicionUsuario: servicio.getEdicionUsuario(),
    }
    return repoServicio.update(updateServicio, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoServicio.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
