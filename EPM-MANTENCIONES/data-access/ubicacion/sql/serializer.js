const _serializeSingle = (ubicacion) => {
    return {
        'IdRegistro': ubicacion.IdRegistro,
        'IdUbicacion': ubicacion.IdUbicacion,
        'IdTipo': ubicacion.IdTipo,
        'Nombre': ubicacion.Nombre,
        'Descripcion': ubicacion.Descripcion,
        'Estado': ubicacion.Estado,
        'CreacionFecha': ubicacion.CreacionFecha,
        'CreacionUsuario': ubicacion.CreacionUsuario,
        'EdicionFecha': ubicacion.EdicionFecha,
        'EdicionUsuario': ubicacion.EdicionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
