const _serializeSingle = (tiposervicio) => {
    return {
        'IdRegistro': tiposervicio.IdRegistro,
        'IdTipo': tiposervicio.IdTipo,
        'IdCategoria': tiposervicio.IdCategoria,
        'Nombre': tiposervicio.Nombre,
        'Descripcion': tiposervicio.Descripcion,
        'Estado': tiposervicio.Estado,
        'CreacionFecha': tiposervicio.CreacionFecha,
        'CreacionUsuario': tiposervicio.CreacionUsuario,
        'EdicionFecha': tiposervicio.EdicionFecha,
        'EdicionUsuario': tiposervicio.EdicionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
