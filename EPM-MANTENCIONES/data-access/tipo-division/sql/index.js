let repoTipoDivision = require('../../../db/sql/models/tipo-division') 
let modeloTipoDivision = require('../../../models/tipo-division/index') 
let tipodivisionDto = require('./serializer') 

let getAll = async () => {
    return repoTipoDivision.findAll({}).then(tipodivisionDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoTipoDivision.findAll({where : { [prop]: val}})
    return tipodivisionDto(resp[0])
}

let add = async (TipoDivisionInfo) => {
    let tipodivision = modeloTipoDivision(TipoDivisionInfo)

    let newTipoDivision = {
        IdTipo: tipodivision.getIdTipo(),
        Nombre: tipodivision.getNombre(),
        Descripcion: tipodivision.getDescripcion(),
        Estado: tipodivision.getEstado(),
        CreacionFecha: tipodivision.getCreacionFecha(),
        CreacionUsuario: tipodivision.getCreacionUsuario(),
        ModificacionFecha: tipodivision.getModificacionFecha(),
        ModificacionUsuario: tipodivision.getModificacionUsuario(),
    }
    return repoTipoDivision.create(newTipoDivision).then(tipodivisionDto)
}

let update = async (id, TipoDivisionInfo) => {
    let tipodivision = modeloTipoDivision(TipoDivisionInfo)

    let updateTipoDivision = {
        IdTipo: tipodivision.getIdTipo(),
        Nombre: tipodivision.getNombre(),
        Descripcion: tipodivision.getDescripcion(),
        Estado: tipodivision.getEstado(),
        CreacionFecha: tipodivision.getCreacionFecha(),
        CreacionUsuario: tipodivision.getCreacionUsuario(),
        ModificacionFecha: tipodivision.getModificacionFecha(),
        ModificacionUsuario: tipodivision.getModificacionUsuario(),
    }
    return repoTipoDivision.update(updateTipoDivision, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoTipoDivision.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
