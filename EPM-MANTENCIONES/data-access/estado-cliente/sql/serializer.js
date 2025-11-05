const _serializeSingle = (estadocliente) => {
    return {
        'IdRegistro': estadocliente.IdRegistro,
        'IdEstado': estadocliente.IdEstado,
        'Nombre': estadocliente.Nombre,
        'Descripcion': estadocliente.Descripcion,
        'Estado': estadocliente.Estado,
        'CreacionFecha': estadocliente.CreacionFecha,
        'CreacionUsuario': estadocliente.CreacionUsuario,
        'EdicionFecha': estadocliente.EdicionFecha,
        'EdicionUsuario': estadocliente.EdicionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
