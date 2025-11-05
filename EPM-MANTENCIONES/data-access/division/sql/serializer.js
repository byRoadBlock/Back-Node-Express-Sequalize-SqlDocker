const _serializeSingle = (division) => {
    return {
        'IdRegistro': division.IdRegistro,
        'IdDivision': division.IdDivision,
        'IdTipo': division.IdTipo,
        'IdCliente': division.IdCliente,
        'Nombre': division.Nombre,
        'Descripcion': division.Descripcion,
        'Estado': division.Estado,
        'CreacionFecha': division.CreacionFecha,
        'CreacionUsuario': division.CreacionUsuario,
        'EdicionFecha': division.EdicionFecha,
        'EdicionUsuario': division.EdicionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
