const _serializeSingle = (tipocliente) => {
    return {
        'IdRegistro': tipocliente.IdRegistro,
        'IdTipo': tipocliente.IdTipo,
        'Nombre': tipocliente.Nombre,
        'Descripcion': tipocliente.Descripcion,
        'Estado': tipocliente.Estado,
        'CreacionFecha': tipocliente.CreacionFecha,
        'CreacionUsuario': tipocliente.CreacionUsuario,
        'EdicionFecha': tipocliente.EdicionFecha,
        'EdicionUsuario': tipocliente.EdicionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
