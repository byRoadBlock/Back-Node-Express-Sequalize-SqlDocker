const _serializeSingle = (tipoorden) => {
    return {
        'IdRegistro': tipoorden.IdRegistro,
        'IdTipo': tipoorden.IdTipo,
        'Nombre': tipoorden.Nombre,
        'Descripcion': tipoorden.Descripcion,
        'Estado': tipoorden.Estado,
        'CreacionFecha': tipoorden.CreacionFecha,
        'CreacionUsuario': tipoorden.CreacionUsuario,
        'EdicionFecha': tipoorden.EdicionFecha,
        'EdicionUsuario': tipoorden.EdicionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
