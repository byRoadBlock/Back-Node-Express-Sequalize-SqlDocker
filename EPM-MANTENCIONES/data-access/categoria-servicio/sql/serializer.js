const _serializeSingle = (categoriaservicio) => {
    return {
        'IdRegistro': categoriaservicio.IdRegistro,
        'IdCategoria': categoriaservicio.IdCategoria,
        'Nombre': categoriaservicio.Nombre,
        'Descripcion': categoriaservicio.Descripcion,
        'Estado': categoriaservicio.Estado,
        'CreacionFecha': categoriaservicio.CreacionFecha,
        'CreacionUsuario': categoriaservicio.CreacionUsuario,
        'EdicionFecha': categoriaservicio.EdicionFecha,
        'EdicionUsuario': categoriaservicio.EdicionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
