let repoTipoUsuario = require('../../../db/sql/models/tipo-usuario') 
let modeloTipoUsuario = require('../../../models/tipo-usuario/index') 
let tipousuarioDto = require('./serializer') 

let getAll = async () => {
    return repoTipoUsuario.findAll({}).then(tipousuarioDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoTipoUsuario.findAll({where : { [prop]: val}})
    return tipousuarioDto(resp[0])
}

let add = async (TipoUsuarioInfo) => {
    let tipousuario = modeloTipoUsuario(TipoUsuarioInfo)

    let newTipoUsuario = {
        IdTipo: tipousuario.getIdTipo(),
        Descripcion: tipousuario.getDescripcion(),
        Estado: tipousuario.getEstado(),
        CreacionFecha: tipousuario.getCreacionFecha(),
        CreacionUsuario: tipousuario.getCreacionUsuario(),
        EdicionFecha: tipousuario.getEdicionFecha(),
        EdicionUsuario: tipousuario.getEdicionUsuario(),
    }
    return repoTipoUsuario.create(newTipoUsuario).then(tipousuarioDto)
}

let update = async (id, TipoUsuarioInfo) => {
    let tipousuario = modeloTipoUsuario(TipoUsuarioInfo)

    let updateTipoUsuario = {
        IdTipo: tipousuario.getIdTipo(),
        Descripcion: tipousuario.getDescripcion(),
        Estado: tipousuario.getEstado(),
        CreacionFecha: tipousuario.getCreacionFecha(),
        CreacionUsuario: tipousuario.getCreacionUsuario(),
        EdicionFecha: tipousuario.getEdicionFecha(),
        EdicionUsuario: tipousuario.getEdicionUsuario(),
    }
    return repoTipoUsuario.update(updateTipoUsuario, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoTipoUsuario.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
