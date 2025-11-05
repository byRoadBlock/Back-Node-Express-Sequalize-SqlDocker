const _serializeSingle = (tipoinfraestructura) => {
    return {
        'IdRegistro': tipoinfraestructura.IdRegistro,
        'IdTipo': tipoinfraestructura.IdTipo,
        'Nombre': tipoinfraestructura.Nombre,
        'Descripcion': tipoinfraestructura.Descripcion,
        'Estado': tipoinfraestructura.Estado,
        'CreacionFecha': tipoinfraestructura.CreacionFecha,
        'CreacionUsuario': tipoinfraestructura.CreacionUsuario,
        'ModificacionFecha': tipoinfraestructura.ModificacionFecha,
        'ModificacionUsuario': tipoinfraestructura.ModificacionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
