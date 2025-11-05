let repoAreaInfraestructura = require('../../../db/sql/models/area-infraestructura') 
let modeloAreaInfraestructura = require('../../../models/area-infraestructura/index') 
let areainfraestructuraDto = require('./serializer') 

let getAll = async () => {
    return repoAreaInfraestructura.findAll({}).then(areainfraestructuraDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoAreaInfraestructura.findAll({where : { [prop]: val}})
    return areainfraestructuraDto(resp[0])
}

let add = async (AreaInfraestructuraInfo) => {
    let areainfraestructura = modeloAreaInfraestructura(AreaInfraestructuraInfo)

    let newAreaInfraestructura = {
        IdArea: areainfraestructura.getIdArea(),
        IdInfraestructura: areainfraestructura.getIdInfraestructura(),
        Descripcion: areainfraestructura.getDescripcion(),
        Estado: areainfraestructura.getEstado(),
        CreacionFecha: areainfraestructura.getCreacionFecha(),
        CreacionUsuario: areainfraestructura.getCreacionUsuario(),
        EdicionFecha: areainfraestructura.getEdicionFecha(),
        EdicionUsuario: areainfraestructura.getEdicionUsuario(),
    }
    return repoAreaInfraestructura.create(newAreaInfraestructura).then(areainfraestructuraDto)
}

let update = async (id, AreaInfraestructuraInfo) => {
    let areainfraestructura = modeloAreaInfraestructura(AreaInfraestructuraInfo)

    let updateAreaInfraestructura = {
        IdArea: areainfraestructura.getIdArea(),
        IdInfraestructura: areainfraestructura.getIdInfraestructura(),
        Descripcion: areainfraestructura.getDescripcion(),
        Estado: areainfraestructura.getEstado(),
        CreacionFecha: areainfraestructura.getCreacionFecha(),
        CreacionUsuario: areainfraestructura.getCreacionUsuario(),
        EdicionFecha: areainfraestructura.getEdicionFecha(),
        EdicionUsuario: areainfraestructura.getEdicionUsuario(),
    }
    return repoAreaInfraestructura.update(updateAreaInfraestructura, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoAreaInfraestructura.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
