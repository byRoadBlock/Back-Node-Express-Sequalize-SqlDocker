const _serializeSingle = (tipocargo) => {
    return {
        'IdRegistro': tipocargo.IdRegistro,
        'IdTipo': tipocargo.IdTipo,
        'Nombre': tipocargo.Nombre,
        'Descripcion': tipocargo.Descripcion,
        'Estado': tipocargo.Estado,
        'CreacionFecha': tipocargo.CreacionFecha,
        'CreacionUsuario': tipocargo.CreacionUsuario,
        'ModificacionFecha': tipocargo.ModificacionFecha,
        'ModificacionUsuario': tipocargo.ModificacionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
