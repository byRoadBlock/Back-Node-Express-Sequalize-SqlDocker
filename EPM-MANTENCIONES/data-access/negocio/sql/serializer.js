const _serializeSingle = (negocio) => {
    return {
        'IdRegistro': negocio.IdRegistro,
        'IdNegocio': negocio.IdNegocio,
        'IdTipo': negocio.IdTipo,
        'Nombre': negocio.Nombre,
        'Descripcion': negocio.Descripcion,
        'Estado': negocio.Estado,
        'CreacionFecha': negocio.CreacionFecha,
        'CreacionUsuario': negocio.CreacionUsuario,
        'EdicionFecha': negocio.EdicionFecha,
        'EdicionUsuario': negocio.EdicionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
