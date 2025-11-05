let repoTipoServicio = require('../../../db/sql/models/tipo-servicio') 
let modeloTipoServicio = require('../../../models/tipo-servicio/index') 
let tiposervicioDto = require('./serializer') 

let getAll = async () => {
    return repoTipoServicio.findAll({}).then(tiposervicioDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoTipoServicio.findAll({where : { [prop]: val}})
    return tiposervicioDto(resp[0])
}

let add = async (TipoServicioInfo) => {
    let tiposervicio = modeloTipoServicio(TipoServicioInfo)

    let newTipoServicio = {
        IdTipo: tiposervicio.getIdTipo(),
        IdCategoria: tiposervicio.getIdCategoria(),
        Nombre: tiposervicio.getNombre(),
        Descripcion: tiposervicio.getDescripcion(),
        Estado: tiposervicio.getEstado(),
        CreacionFecha: tiposervicio.getCreacionFecha(),
        CreacionUsuario: tiposervicio.getCreacionUsuario(),
        EdicionFecha: tiposervicio.getEdicionFecha(),
        EdicionUsuario: tiposervicio.getEdicionUsuario(),
    }
    return repoTipoServicio.create(newTipoServicio).then(tiposervicioDto)
}

let update = async (id, TipoServicioInfo) => {
    let tiposervicio = modeloTipoServicio(TipoServicioInfo)

    let updateTipoServicio = {
        IdTipo: tiposervicio.getIdTipo(),
        IdCategoria: tiposervicio.getIdCategoria(),
        Nombre: tiposervicio.getNombre(),
        Descripcion: tiposervicio.getDescripcion(),
        Estado: tiposervicio.getEstado(),
        CreacionFecha: tiposervicio.getCreacionFecha(),
        CreacionUsuario: tiposervicio.getCreacionUsuario(),
        EdicionFecha: tiposervicio.getEdicionFecha(),
        EdicionUsuario: tiposervicio.getEdicionUsuario(),
    }
    return repoTipoServicio.update(updateTipoServicio, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoTipoServicio.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
