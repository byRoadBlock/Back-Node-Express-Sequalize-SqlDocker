const _serializeSingle = (negociodetalle) => {
    return {
        'IdRegistro': negociodetalle.IdRegistro,
        'IdDetalle': negociodetalle.IdDetalle,
        'IdNegocio': negociodetalle.IdNegocio,
        'IdServicio': negociodetalle.IdServicio,
        'Nombre': negociodetalle.Nombre,
        'Descripcion': negociodetalle.Descripcion,
        'Estado': negociodetalle.Estado,
        'CreacionFecha': negociodetalle.CreacionFecha,
        'CreacionUsuario': negociodetalle.CreacionUsuario,
        'EdicionFecha': negociodetalle.EdicionFecha,
        'EdicionUsuario': negociodetalle.EdicionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
