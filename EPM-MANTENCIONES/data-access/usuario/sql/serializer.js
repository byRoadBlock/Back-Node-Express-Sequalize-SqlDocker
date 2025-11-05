const _serializeSingle = (usuario) => {
    return {
        'IdRegistro': usuario.IdRegistro,
        'IdUsuario': usuario.IdUsuario,
        'IdTipoUsuario': usuario.IdTipoUsuario,
        'Nombres': usuario.Nombres,
        'Apellidos': usuario.Apellidos,
        'Correo': usuario.Correo,
        'Telefono': usuario.Telefono,
        'Edad': usuario.Edad,
        'Sexo': usuario.Sexo,
        'Estado': usuario.Estado,
        'CreacionFecha': usuario.CreacionFecha,
        'CreacionUsuario': usuario.CreacionUsuario,
        'ModificacionFecha': usuario.ModificacionFecha,
        'ModificacionUsuario': usuario.ModificacionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
