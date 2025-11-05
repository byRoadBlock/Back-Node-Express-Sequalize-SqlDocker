let buildMakeOrdenDetalle = function(validator) {
	return function makeOrdenDetalle({

		//IdRegistro,
		IdOrden,
		IdTrabajo,
		IdDetalle,
		Nombre,
		Descripcion,
		IdEstado,
		CreacionFecha,
		CreacionUsuario,
		EdicionFecha,
		EdicionUsuario,
	} = {}) {
		let {error} = validator({IdOrden,IdTrabajo,IdDetalle,Nombre,Descripcion,IdEstado,CreacionFecha,CreacionUsuario,EdicionFecha,EdicionUsuario,})
		if (error) throw new Error(error)
		return Object.freeze({
			//getIdRegistro: () => IdRegistro,
			getIdOrden: () => IdOrden,
			getIdTrabajo: () => IdTrabajo,
			getIdDetalle: () => IdDetalle,
			getNombre: () => Nombre,
			getDescripcion: () => Descripcion,
			getIdEstado: () => IdEstado,
			getCreacionFecha: () => CreacionFecha,
			getCreacionUsuario: () => CreacionUsuario,
			getEdicionFecha: () => EdicionFecha,
			getEdicionUsuario: () => EdicionUsuario,
		
		})
	}
}
module.exports = buildMakeOrdenDetalle
