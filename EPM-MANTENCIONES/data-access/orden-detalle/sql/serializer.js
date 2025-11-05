const _serializeSingle = (ordendetalle) => {
    return {
        'IdRegistro': ordendetalle.IdRegistro,
        'IdOrden': ordendetalle.IdOrden,
        'IdTrabajo': ordendetalle.IdTrabajo,
        'IdDetalle': ordendetalle.IdDetalle,
        'Nombre': ordendetalle.Nombre,
        'Descripcion': ordendetalle.Descripcion,
        'IdEstado': ordendetalle.IdEstado,
        'CreacionFecha': ordendetalle.CreacionFecha,
        'CreacionUsuario': ordendetalle.CreacionUsuario,
        'EdicionFecha': ordendetalle.EdicionFecha,
        'EdicionUsuario': ordendetalle.EdicionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
