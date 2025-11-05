const _serializeSingle = (serviciodetalle) => {
    return {
        'IdRegistro': serviciodetalle.IdRegistro,
        'IdServicio': serviciodetalle.IdServicio,
        'IdDetalle': serviciodetalle.IdDetalle,
        'Descripcion': serviciodetalle.Descripcion,
        'Valor': serviciodetalle.Valor,
        'Estado': serviciodetalle.Estado,
        'CreacionFecha': serviciodetalle.CreacionFecha,
        'CreacionUsuario': serviciodetalle.CreacionUsuario,
        'EdicionFecha': serviciodetalle.EdicionFecha,
        'EdicionUsuario': serviciodetalle.EdicionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
