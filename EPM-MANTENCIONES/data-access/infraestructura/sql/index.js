let repoInfraestructura = require('../../../db/sql/models/infraestructura') 
let modeloInfraestructura = require('../../../models/infraestructura/index') 
let infraestructuraDto = require('./serializer') 

let getAll = async () => {
    return repoInfraestructura.findAll({}).then(infraestructuraDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoInfraestructura.findAll({where : { [prop]: val}})
    return infraestructuraDto(resp[0])
}

let add = async (InfraestructuraInfo) => {
    let infraestructura = modeloInfraestructura(InfraestructuraInfo)

    let newInfraestructura = {
        IdInfraestructura: infraestructura.getIdInfraestructura(),
        Nombre: infraestructura.getNombre(),
        Descripcion: infraestructura.getDescripcion(),
        Estado: infraestructura.getEstado(),
        CreacionFecha: infraestructura.getCreacionFecha(),
        CreacionUsuario: infraestructura.getCreacionUsuario(),
        EdicionFecha: infraestructura.getEdicionFecha(),
        EdicionUsuario: infraestructura.getEdicionUsuario(),
    }
    return repoInfraestructura.create(newInfraestructura).then(infraestructuraDto)
}

let update = async (id, InfraestructuraInfo) => {
    let infraestructura = modeloInfraestructura(InfraestructuraInfo)

    let updateInfraestructura = {
        IdInfraestructura: infraestructura.getIdInfraestructura(),
        Nombre: infraestructura.getNombre(),
        Descripcion: infraestructura.getDescripcion(),
        Estado: infraestructura.getEstado(),
        CreacionFecha: infraestructura.getCreacionFecha(),
        CreacionUsuario: infraestructura.getCreacionUsuario(),
        EdicionFecha: infraestructura.getEdicionFecha(),
        EdicionUsuario: infraestructura.getEdicionUsuario(),
    }
    return repoInfraestructura.update(updateInfraestructura, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoInfraestructura.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
