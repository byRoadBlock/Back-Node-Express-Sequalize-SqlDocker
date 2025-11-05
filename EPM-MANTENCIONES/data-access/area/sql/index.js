let repoArea = require('../../../db/sql/models/area') 
let modeloArea = require('../../../models/area/index') 
let areaDto = require('./serializer') 

let getAll = async () => {
    return repoArea.findAll({}).then(areaDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoArea.findAll({where : { [prop]: val}})
    return areaDto(resp[0])
}

let add = async (AreaInfo) => {
    let area = modeloArea(AreaInfo)

    let newArea = {
        IdArea: area.getIdArea(),
        IdTipo: area.getIdTipo(),
        Nombre: area.getNombre(),
        Descripcion: area.getDescripcion(),
        Estado: area.getEstado(),
        CreacionFecha: area.getCreacionFecha(),
        CreacionUsuario: area.getCreacionUsuario(),
        EdicionFecha: area.getEdicionFecha(),
        EdicionUsuario: area.getEdicionUsuario(),
    }
    return repoArea.create(newArea).then(areaDto)
}

let update = async (id, AreaInfo) => {
    let area = modeloArea(AreaInfo)

    let updateArea = {
        IdArea: area.getIdArea(),
        IdTipo: area.getIdTipo(),
        Nombre: area.getNombre(),
        Descripcion: area.getDescripcion(),
        Estado: area.getEstado(),
        CreacionFecha: area.getCreacionFecha(),
        CreacionUsuario: area.getCreacionUsuario(),
        EdicionFecha: area.getEdicionFecha(),
        EdicionUsuario: area.getEdicionUsuario(),
    }
    return repoArea.update(updateArea, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoArea.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
