const _serializeSingle = (estadotrabajos) => {
    return {
        'IdRegistro': estadotrabajos.IdRegistro,
        'IdEstado': estadotrabajos.IdEstado,
        'Nombre': estadotrabajos.Nombre,
        'Descripcion': estadotrabajos.Descripcion,
        'Estado': estadotrabajos.Estado,
        'CreacionFecha': estadotrabajos.CreacionFecha,
        'CreacionUsuario': estadotrabajos.CreacionUsuario,
        'EdicionFecha': estadotrabajos.EdicionFecha,
        'EdicionUsuario': estadotrabajos.EdicionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
