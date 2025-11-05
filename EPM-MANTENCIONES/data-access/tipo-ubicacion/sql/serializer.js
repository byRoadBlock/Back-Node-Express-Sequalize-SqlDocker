const _serializeSingle = (tipoubicacion) => {
    return {
        'IdRegistro': tipoubicacion.IdRegistro,
        'IdTipo': tipoubicacion.IdTipo,
        'Nombre': tipoubicacion.Nombre,
        'Descripcion': tipoubicacion.Descripcion,
        'Estado': tipoubicacion.Estado,
        'CreacionFecha': tipoubicacion.CreacionFecha,
        'CreacionUsuario': tipoubicacion.CreacionUsuario,
        'EdicionFecha': tipoubicacion.EdicionFecha,
        'EdicionUsuario': tipoubicacion.EdicionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
