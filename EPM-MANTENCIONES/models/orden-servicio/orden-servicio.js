let buildMakeOrdenServicio = function(validator) {
	return function makeOrdenServicio({

		//IdRegistro,
		IdOrden,
		IdServicio,
		IdDetalle,
		IdEstado,
		CreacionFecha,
		CreacionUsuario,
		EdicionFecha,
		EdicionUsuario,
	} = {}) {
		let {error} = validator({IdOrden,IdServicio,IdDetalle,IdEstado,CreacionFecha,CreacionUsuario,EdicionFecha,EdicionUsuario,})
		if (error) throw new Error(error)
		return Object.freeze({
			//getIdRegistro: () => IdRegistro,
			getIdOrden: () => IdOrden,
			getIdServicio: () => IdServicio,
			getIdDetalle: () => IdDetalle,
			getIdEstado: () => IdEstado,
			getCreacionFecha: () => CreacionFecha,
			getCreacionUsuario: () => CreacionUsuario,
			getEdicionFecha: () => EdicionFecha,
			getEdicionUsuario: () => EdicionUsuario,
		
		})
	}
}
module.exports = buildMakeOrdenServicio
