let repoUsuarioLogin = require('../../../db/sql/models/usuario-login') 
let modeloUsuarioLogin = require('../../../models/usuario-login/index') 
let usuariologinDto = require('./serializer') 

let getAll = async () => {
    return repoUsuarioLogin.findAll({}).then(usuariologinDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoUsuarioLogin.findAll({where : { [prop]: val}})
    return usuariologinDto(resp[0])
}

let add = async (UsuarioLoginInfo) => {
    let usuariologin = modeloUsuarioLogin(UsuarioLoginInfo)

    let newUsuarioLogin = {
        IdUsuario: usuariologin.getIdUsuario(),
        Login: usuariologin.getLogin(),
        Password: usuariologin.getPassword(),
        Estado: usuariologin.getEstado(),
        CreacionFecha: usuariologin.getCreacionFecha(),
        CreacionUsuario: usuariologin.getCreacionUsuario(),
        EdicionFecha: usuariologin.getEdicionFecha(),
        EdicionUsuario: usuariologin.getEdicionUsuario(),
    }
    return repoUsuarioLogin.create(newUsuarioLogin).then(usuariologinDto)
}

let update = async (id, UsuarioLoginInfo) => {
    let usuariologin = modeloUsuarioLogin(UsuarioLoginInfo)

    let updateUsuarioLogin = {
        IdUsuario: usuariologin.getIdUsuario(),
        Login: usuariologin.getLogin(),
        Password: usuariologin.getPassword(),
        Estado: usuariologin.getEstado(),
        CreacionFecha: usuariologin.getCreacionFecha(),
        CreacionUsuario: usuariologin.getCreacionUsuario(),
        EdicionFecha: usuariologin.getEdicionFecha(),
        EdicionUsuario: usuariologin.getEdicionUsuario(),
    }
    return repoUsuarioLogin.update(updateUsuarioLogin, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoUsuarioLogin.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
