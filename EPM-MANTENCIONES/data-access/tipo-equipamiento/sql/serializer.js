const _serializeSingle = (tipoequipamiento) => {
    return {
        'IdRegistro': tipoequipamiento.IdRegistro,
        'IdTipo': tipoequipamiento.IdTipo,
        'Nombre': tipoequipamiento.Nombre,
        'Descripcion': tipoequipamiento.Descripcion,
        'Estado': tipoequipamiento.Estado,
        'CreacionFecha': tipoequipamiento.CreacionFecha,
        'CreacionUsuario': tipoequipamiento.CreacionUsuario,
        'ModificacionFecha': tipoequipamiento.ModificacionFecha,
        'ModificacionUsuario': tipoequipamiento.ModificacionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
