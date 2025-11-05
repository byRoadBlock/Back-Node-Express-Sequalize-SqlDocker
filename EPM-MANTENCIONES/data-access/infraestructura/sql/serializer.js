const _serializeSingle = (infraestructura) => {
    return {
        'IdRegistro': infraestructura.IdRegistro,
        'IdInfraestructura': infraestructura.IdInfraestructura,
        'Nombre': infraestructura.Nombre,
        'Descripcion': infraestructura.Descripcion,
        'Estado': infraestructura.Estado,
        'CreacionFecha': infraestructura.CreacionFecha,
        'CreacionUsuario': infraestructura.CreacionUsuario,
        'EdicionFecha': infraestructura.EdicionFecha,
        'EdicionUsuario': infraestructura.EdicionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
