const _serializeSingle = (tipousuario) => {
    return {
        'IdRegistro': tipousuario.IdRegistro,
        'IdTipo': tipousuario.IdTipo,
        'Descripcion': tipousuario.Descripcion,
        'Estado': tipousuario.Estado,
        'CreacionFecha': tipousuario.CreacionFecha,
        'CreacionUsuario': tipousuario.CreacionUsuario,
        'EdicionFecha': tipousuario.EdicionFecha,
        'EdicionUsuario': tipousuario.EdicionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
