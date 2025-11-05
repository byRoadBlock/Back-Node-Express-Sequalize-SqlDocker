let repoEstadoTrabajos = require('../../../db/sql/models/estado-trabajos') 
let modeloEstadoTrabajos = require('../../../models/estado-trabajos/index') 
let estadotrabajosDto = require('./serializer') 

let getAll = async () => {
    return repoEstadoTrabajos.findAll({}).then(estadotrabajosDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoEstadoTrabajos.findAll({where : { [prop]: val}})
    return estadotrabajosDto(resp[0])
}

let add = async (EstadoTrabajosInfo) => {
    let estadotrabajos = modeloEstadoTrabajos(EstadoTrabajosInfo)

    let newEstadoTrabajos = {
        IdEstado: estadotrabajos.getIdEstado(),
        Nombre: estadotrabajos.getNombre(),
        Descripcion: estadotrabajos.getDescripcion(),
        Estado: estadotrabajos.getEstado(),
        CreacionFecha: estadotrabajos.getCreacionFecha(),
        CreacionUsuario: estadotrabajos.getCreacionUsuario(),
        EdicionFecha: estadotrabajos.getEdicionFecha(),
        EdicionUsuario: estadotrabajos.getEdicionUsuario(),
    }
    return repoEstadoTrabajos.create(newEstadoTrabajos).then(estadotrabajosDto)
}

let update = async (id, EstadoTrabajosInfo) => {
    let estadotrabajos = modeloEstadoTrabajos(EstadoTrabajosInfo)

    let updateEstadoTrabajos = {
        IdEstado: estadotrabajos.getIdEstado(),
        Nombre: estadotrabajos.getNombre(),
        Descripcion: estadotrabajos.getDescripcion(),
        Estado: estadotrabajos.getEstado(),
        CreacionFecha: estadotrabajos.getCreacionFecha(),
        CreacionUsuario: estadotrabajos.getCreacionUsuario(),
        EdicionFecha: estadotrabajos.getEdicionFecha(),
        EdicionUsuario: estadotrabajos.getEdicionUsuario(),
    }
    return repoEstadoTrabajos.update(updateEstadoTrabajos, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoEstadoTrabajos.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
