const _serializeSingle = (cliente) => {
    return {
        'IdRegistro': cliente.IdRegistro,
        'IdCliente': cliente.IdCliente,
        'Estado': cliente.Estado,
        'CreacionFecha': cliente.CreacionFecha,
        'CreacionUsuario': cliente.CreacionUsuario,
        'EdicionFecha': cliente.EdicionFecha,
        'EdicionUsuario': cliente.EdicionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
