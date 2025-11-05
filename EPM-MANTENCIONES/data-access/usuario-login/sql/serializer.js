const _serializeSingle = (usuariologin) => {
    return {
        'IdRegistro': usuariologin.IdRegistro,
        'IdUsuario': usuariologin.IdUsuario,
        'Login': usuariologin.Login,
        'Password': usuariologin.Password,
        'Estado': usuariologin.Estado,
        'CreacionFecha': usuariologin.CreacionFecha,
        'CreacionUsuario': usuariologin.CreacionUsuario,
        'EdicionFecha': usuariologin.EdicionFecha,
        'EdicionUsuario': usuariologin.EdicionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
