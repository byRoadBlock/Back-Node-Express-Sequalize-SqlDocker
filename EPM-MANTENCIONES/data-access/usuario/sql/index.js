let repoUsuario = require('../../../db/sql/models/usuario') 
let modeloUsuario = require('../../../models/usuario/index') 
let usuarioDto = require('./serializer') 

let getAll = async () => {
    return repoUsuario.findAll({}).then(usuarioDto)
}

let find = async (prop, val) => {
    if(prop == 'id') prop = '_id'
    const resp = await repoUsuario.findAll({where : { [prop]: val}})
    return usuarioDto(resp[0])
}

let add = async (UsuarioInfo) => {
    let usuario = modeloUsuario(UsuarioInfo)

    let newUsuario = {
        IdUsuario: usuario.getIdUsuario(),
        IdTipoUsuario: usuario.getIdTipoUsuario(),
        Nombres: usuario.getNombres(),
        Apellidos: usuario.getApellidos(),
        Correo: usuario.getCorreo(),
        Telefono: usuario.getTelefono(),
        Edad: usuario.getEdad(),
        Sexo: usuario.getSexo(),
        Estado: usuario.getEstado(),
        CreacionFecha: usuario.getCreacionFecha(),
        CreacionUsuario: usuario.getCreacionUsuario(),
        ModificacionFecha: usuario.getModificacionFecha(),
        ModificacionUsuario: usuario.getModificacionUsuario(),
    }
    return repoUsuario.create(newUsuario).then(usuarioDto)
}

let update = async (id, UsuarioInfo) => {
    let usuario = modeloUsuario(UsuarioInfo)

    let updateUsuario = {
        IdUsuario: usuario.getIdUsuario(),
        IdTipoUsuario: usuario.getIdTipoUsuario(),
        Nombres: usuario.getNombres(),
        Apellidos: usuario.getApellidos(),
        Correo: usuario.getCorreo(),
        Telefono: usuario.getTelefono(),
        Edad: usuario.getEdad(),
        Sexo: usuario.getSexo(),
        Estado: usuario.getEstado(),
        CreacionFecha: usuario.getCreacionFecha(),
        CreacionUsuario: usuario.getCreacionUsuario(),
        ModificacionFecha: usuario.getModificacionFecha(),
        ModificacionUsuario: usuario.getModificacionUsuario(),
    }
    return repoUsuario.update(updateUsuario, {where: {id: id}}).then(() => find('id', id))
}

let remove = async (id) => {
    return repoUsuario.destroy({where: {id: id}})
}

module.exports = {
    getAll,
    find,
    add,
    update,
    remove
}
