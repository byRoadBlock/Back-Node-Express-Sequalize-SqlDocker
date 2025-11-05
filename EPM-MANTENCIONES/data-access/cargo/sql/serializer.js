const _serializeSingle = (cargo) => {
    return {
        'IdRegistro': cargo.IdRegistro,
        'IdCargo': cargo.IdCargo,
        'IdTipo': cargo.IdTipo,
        'Nombre': cargo.Nombre,
        'Descripcion': cargo.Descripcion,
        'Estado': cargo.Estado,
        'CreacionFecha': cargo.CreacionFecha,
        'CreacionUsuario': cargo.CreacionUsuario,
        'EdicionFecha': cargo.EdicionFecha,
        'EdicionUsuario': cargo.EdicionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
