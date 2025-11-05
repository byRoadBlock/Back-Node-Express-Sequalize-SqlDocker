const _serializeSingle = (tipodivision) => {
    return {
        'IdRegistro': tipodivision.IdRegistro,
        'IdTipo': tipodivision.IdTipo,
        'Nombre': tipodivision.Nombre,
        'Descripcion': tipodivision.Descripcion,
        'Estado': tipodivision.Estado,
        'CreacionFecha': tipodivision.CreacionFecha,
        'CreacionUsuario': tipodivision.CreacionUsuario,
        'ModificacionFecha': tipodivision.ModificacionFecha,
        'ModificacionUsuario': tipodivision.ModificacionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
