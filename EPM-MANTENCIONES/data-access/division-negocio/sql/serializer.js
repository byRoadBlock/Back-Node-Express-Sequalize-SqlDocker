const _serializeSingle = (divisionnegocio) => {
    return {
        'IdRegistro': divisionnegocio.IdRegistro,
        'IdDivision': divisionnegocio.IdDivision,
        'IdNegocio': divisionnegocio.IdNegocio,
        'Descripcion': divisionnegocio.Descripcion,
        'Estado': divisionnegocio.Estado,
        'CreacionFecha': divisionnegocio.CreacionFecha,
        'CreacionUsuario': divisionnegocio.CreacionUsuario,
        'EdicionFecha': divisionnegocio.EdicionFecha,
        'EdicionUsuario': divisionnegocio.EdicionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
