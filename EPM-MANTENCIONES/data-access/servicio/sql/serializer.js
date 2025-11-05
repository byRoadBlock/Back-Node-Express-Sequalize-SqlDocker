const _serializeSingle = (servicio) => {
    return {
        'IdRegistro': servicio.IdRegistro,
        'IdServicio': servicio.IdServicio,
        'IdTipo': servicio.IdTipo,
        'Nombre': servicio.Nombre,
        'Descripcion': servicio.Descripcion,
        'Estado': servicio.Estado,
        'CreacionFecha': servicio.CreacionFecha,
        'CreacionUsuario': servicio.CreacionUsuario,
        'EdicionFecha': servicio.EdicionFecha,
        'EdicionUsuario': servicio.EdicionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
