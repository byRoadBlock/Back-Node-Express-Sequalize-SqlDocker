const _serializeSingle = (negocioorden) => {
    return {
        'IdRegistro': negocioorden.IdRegistro,
        'IdNegocio': negocioorden.IdNegocio,
        'IdServicio': negocioorden.IdServicio,
        'IdOrden': negocioorden.IdOrden,
        'Estado': negocioorden.Estado,
        'CreacionFecha': negocioorden.CreacionFecha,
        'CreacionUsuario': negocioorden.CreacionUsuario,
        'EdicionFecha': negocioorden.EdicionFecha,
        'EdicionUsuario': negocioorden.EdicionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
