const _serializeSingle = (area) => {
    return {
        'IdRegistro': area.IdRegistro,
        'IdArea': area.IdArea,
        'IdTipo': area.IdTipo,
        'Nombre': area.Nombre,
        'Descripcion': area.Descripcion,
        'Estado': area.Estado,
        'CreacionFecha': area.CreacionFecha,
        'CreacionUsuario': area.CreacionUsuario,
        'EdicionFecha': area.EdicionFecha,
        'EdicionUsuario': area.EdicionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
