const _serializeSingle = (estadoorden) => {
    return {
        'IdRegistro': estadoorden.IdRegistro,
        'IdEstado': estadoorden.IdEstado,
        'Nombre': estadoorden.Nombre,
        'Descripcion': estadoorden.Descripcion,
        'Transaccion': estadoorden.Transaccion,
        'Estado': estadoorden.Estado,
        'CreacionFecha': estadoorden.CreacionFecha,
        'CreacionUsuario': estadoorden.CreacionUsuario,
        'EdicionFecha': estadoorden.EdicionFecha,
        'EdicionUsuario': estadoorden.EdicionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
