const _serializeSingle = (infraestructuradetalle) => {
    return {
        'IdRegistro': infraestructuradetalle.IdRegistro,
        'IdInfraestructura': infraestructuradetalle.IdInfraestructura,
        'IdDetalle': infraestructuradetalle.IdDetalle,
        'IdTipo': infraestructuradetalle.IdTipo,
        'Nombre': infraestructuradetalle.Nombre,
        'Descripcion': infraestructuradetalle.Descripcion,
        'Estado': infraestructuradetalle.Estado,
        'CreacionFecha': infraestructuradetalle.CreacionFecha,
        'CreacionUsuario': infraestructuradetalle.CreacionUsuario,
        'EdicionFecha': infraestructuradetalle.EdicionFecha,
        'EdicionUsuario': infraestructuradetalle.EdicionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
