const _serializeSingle = (divisionarea) => {
    return {
        'IdRegistro': divisionarea.IdRegistro,
        'IdDivision': divisionarea.IdDivision,
        'IdArea': divisionarea.IdArea,
        'Descripcion': divisionarea.Descripcion,
        'Estado': divisionarea.Estado,
        'CreacionFecha': divisionarea.CreacionFecha,
        'CreacionUsuario': divisionarea.CreacionUsuario,
        'EdicionFecha': divisionarea.EdicionFecha,
        'EdicionUsuario': divisionarea.EdicionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
