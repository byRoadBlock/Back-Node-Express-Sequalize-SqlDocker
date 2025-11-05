let repoNegocioServicio = require('../../../db/sql/models/negocio-servicio') 
let modeloNegocioServicio = require('../../../models/negocio-servicio/index') 
let negocioservicioDto = require('./serializer') 

let getAll = async () => {
    return repoNegocioServicio.findAll({}).then(negocioservicioDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoNegocioServicio.findAll({where : { [prop]: val}})
    return negocioservicioDto(resp[0])
}

let add = async (NegocioServicioInfo) => {
    let negocioservicio = modeloNegocioServicio(NegocioServicioInfo)

    let newNegocioServicio = {
        IdNegocio: negocioservicio.getIdNegocio(),
        IdServicio: negocioservicio.getIdServicio(),
        Estado: negocioservicio.getEstado(),
        CreacionFecha: negocioservicio.getCreacionFecha(),
        CreacionUsuario: negocioservicio.getCreacionUsuario(),
        EdicionFecha: negocioservicio.getEdicionFecha(),
        EdicionUsuario: negocioservicio.getEdicionUsuario(),
    }
    return repoNegocioServicio.create(newNegocioServicio).then(negocioservicioDto)
}

let update = async (id, NegocioServicioInfo) => {
    let negocioservicio = modeloNegocioServicio(NegocioServicioInfo)

    let updateNegocioServicio = {
        IdNegocio: negocioservicio.getIdNegocio(),
        IdServicio: negocioservicio.getIdServicio(),
        Estado: negocioservicio.getEstado(),
        CreacionFecha: negocioservicio.getCreacionFecha(),
        CreacionUsuario: negocioservicio.getCreacionUsuario(),
        EdicionFecha: negocioservicio.getEdicionFecha(),
        EdicionUsuario: negocioservicio.getEdicionUsuario(),
    }
    return repoNegocioServicio.update(updateNegocioServicio, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoNegocioServicio.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
