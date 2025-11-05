const _serializeSingle = (ordenservicio) => {
    return {
        'IdRegistro': ordenservicio.IdRegistro,
        'IdOrden': ordenservicio.IdOrden,
        'IdServicio': ordenservicio.IdServicio,
        'IdDetalle': ordenservicio.IdDetalle,
        'IdEstado': ordenservicio.IdEstado,
        'CreacionFecha': ordenservicio.CreacionFecha,
        'CreacionUsuario': ordenservicio.CreacionUsuario,
        'EdicionFecha': ordenservicio.EdicionFecha,
        'EdicionUsuario': ordenservicio.EdicionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
