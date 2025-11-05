let repoTipoInfraestructura = require('../../../db/sql/models/tipo-infraestructura') 
let modeloTipoInfraestructura = require('../../../models/tipo-infraestructura/index') 
let tipoinfraestructuraDto = require('./serializer') 

let getAll = async () => {
    return repoTipoInfraestructura.findAll({}).then(tipoinfraestructuraDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoTipoInfraestructura.findAll({where : { [prop]: val}})
    return tipoinfraestructuraDto(resp[0])
}

let add = async (TipoInfraestructuraInfo) => {
    let tipoinfraestructura = modeloTipoInfraestructura(TipoInfraestructuraInfo)

    let newTipoInfraestructura = {
        IdTipo: tipoinfraestructura.getIdTipo(),
        Nombre: tipoinfraestructura.getNombre(),
        Descripcion: tipoinfraestructura.getDescripcion(),
        Estado: tipoinfraestructura.getEstado(),
        CreacionFecha: tipoinfraestructura.getCreacionFecha(),
        CreacionUsuario: tipoinfraestructura.getCreacionUsuario(),
        ModificacionFecha: tipoinfraestructura.getModificacionFecha(),
        ModificacionUsuario: tipoinfraestructura.getModificacionUsuario(),
    }
    return repoTipoInfraestructura.create(newTipoInfraestructura).then(tipoinfraestructuraDto)
}

let update = async (id, TipoInfraestructuraInfo) => {
    let tipoinfraestructura = modeloTipoInfraestructura(TipoInfraestructuraInfo)

    let updateTipoInfraestructura = {
        IdTipo: tipoinfraestructura.getIdTipo(),
        Nombre: tipoinfraestructura.getNombre(),
        Descripcion: tipoinfraestructura.getDescripcion(),
        Estado: tipoinfraestructura.getEstado(),
        CreacionFecha: tipoinfraestructura.getCreacionFecha(),
        CreacionUsuario: tipoinfraestructura.getCreacionUsuario(),
        ModificacionFecha: tipoinfraestructura.getModificacionFecha(),
        ModificacionUsuario: tipoinfraestructura.getModificacionUsuario(),
    }
    return repoTipoInfraestructura.update(updateTipoInfraestructura, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoTipoInfraestructura.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
