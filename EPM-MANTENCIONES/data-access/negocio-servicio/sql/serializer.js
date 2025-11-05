const _serializeSingle = (negocioservicio) => {
    return {
        'IdRegistro': negocioservicio.IdRegistro,
        'IdNegocio': negocioservicio.IdNegocio,
        'IdServicio': negocioservicio.IdServicio,
        'Estado': negocioservicio.Estado,
        'CreacionFecha': negocioservicio.CreacionFecha,
        'CreacionUsuario': negocioservicio.CreacionUsuario,
        'EdicionFecha': negocioservicio.EdicionFecha,
        'EdicionUsuario': negocioservicio.EdicionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
