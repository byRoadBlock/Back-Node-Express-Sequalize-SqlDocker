const _serializeSingle = (clientedetalle) => {
    return {
        'IdRegistro': clientedetalle.IdRegistro,
        'IdCliente': clientedetalle.IdCliente,
        'IdDetalle': clientedetalle.IdDetalle,
        'IdTipo': clientedetalle.IdTipo,
        'Nombre': clientedetalle.Nombre,
        'Descripcion': clientedetalle.Descripcion,
        'Estado': clientedetalle.Estado,
        'CreacionFecha': clientedetalle.CreacionFecha,
        'CreacionUsuario': clientedetalle.CreacionUsuario,
        'EdicionFecha': clientedetalle.EdicionFecha,
        'EdicionUsuario': clientedetalle.EdicionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
