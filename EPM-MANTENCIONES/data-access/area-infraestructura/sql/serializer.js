const _serializeSingle = (areainfraestructura) => {
    return {
        'IdRegistro': areainfraestructura.IdRegistro,
        'IdArea': areainfraestructura.IdArea,
        'IdInfraestructura': areainfraestructura.IdInfraestructura,
        'Descripcion': areainfraestructura.Descripcion,
        'Estado': areainfraestructura.Estado,
        'CreacionFecha': areainfraestructura.CreacionFecha,
        'CreacionUsuario': areainfraestructura.CreacionUsuario,
        'EdicionFecha': areainfraestructura.EdicionFecha,
        'EdicionUsuario': areainfraestructura.EdicionUsuario,
    }
}

const serializer = (data) => {
    if(!data) return null
    if(Array.isArray(data)) return data.map(_serializeSingle)
    return _serializeSingle(data)
}

module.exports = serializer
