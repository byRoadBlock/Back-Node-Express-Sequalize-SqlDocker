const _serializeSingle = (tipoarea) => {
    return {
        'IdRegistro': tipoarea.IdRegistro,
        'IdTipo': tipoarea.IdTipo,
        'Nombre': tipoarea.Nombre,
        'Descripcion': tipoarea.Descripcion,
        'Estado': tipoarea.Estado,
        'CreacionFecha': tipoarea.CreacionFecha,
        'CreacionUsuario': tipoarea.CreacionUsuario,
        'ModificacionFecha': tipoarea.ModificacionFecha,
        'ModificacionUsuario': tipoarea.ModificacionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
