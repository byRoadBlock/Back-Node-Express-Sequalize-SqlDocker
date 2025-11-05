const _serializeSingle = (infraestructuraubicacion) => {
    return {
        'IdRegistro': infraestructuraubicacion.IdRegistro,
        'IdInfraestructura': infraestructuraubicacion.IdInfraestructura,
        'IdUbicacion': infraestructuraubicacion.IdUbicacion,
        'Descripcion': infraestructuraubicacion.Descripcion,
        'Estado': infraestructuraubicacion.Estado,
        'CreacionFecha': infraestructuraubicacion.CreacionFecha,
        'CreacionUsuario': infraestructuraubicacion.CreacionUsuario,
        'EdicionFecha': infraestructuraubicacion.EdicionFecha,
        'EdicionUsuario': infraestructuraubicacion.EdicionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
