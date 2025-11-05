const _serializeSingle = (tiponegocio) => {
    return {
        'IdRegistro': tiponegocio.IdRegistro,
        'IdTipo': tiponegocio.IdTipo,
        'Nombre': tiponegocio.Nombre,
        'Descripcion': tiponegocio.Descripcion,
        'Estado': tiponegocio.Estado,
        'CreacionFecha': tiponegocio.CreacionFecha,
        'CreacionUsuario': tiponegocio.CreacionUsuario,
        'ModificacionFecha': tiponegocio.ModificacionFecha,
        'ModificacionUsuario': tiponegocio.ModificacionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
