const _serializeSingle = (orden) => {
    return {
        'IdRegistro': orden.IdRegistro,
        'IdOrden': orden.IdOrden,
        'IdTipo': orden.IdTipo,
        'Nombre': orden.Nombre,
        'IdEstado': orden.IdEstado,
        'CreacionFecha': orden.CreacionFecha,
        'CreacionUsuario': orden.CreacionUsuario,
        'EdicionFecha': orden.EdicionFecha,
        'EdicionUsuario': orden.EdicionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
