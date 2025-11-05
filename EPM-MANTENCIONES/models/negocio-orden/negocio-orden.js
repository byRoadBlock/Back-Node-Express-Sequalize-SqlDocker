let buildMakeNegocioOrden = function(validator) {
	return function makeNegocioOrden({

		//IdRegistro,
		IdNegocio,
		IdServicio,
		IdOrden,
		Estado,
		CreacionFecha,
		CreacionUsuario,
		EdicionFecha,
		EdicionUsuario,
	} = {}) {
		let {error} = validator({IdNegocio,IdServicio,IdOrden,Estado,CreacionFecha,CreacionUsuario,EdicionFecha,EdicionUsuario,})
		if (error) throw new Error(error)
		return Object.freeze({
			//getIdRegistro: () => IdRegistro,
			getIdNegocio: () => IdNegocio,
			getIdServicio: () => IdServicio,
			getIdOrden: () => IdOrden,
			getEstado: () => Estado,
			getCreacionFecha: () => CreacionFecha,
			getCreacionUsuario: () => CreacionUsuario,
			getEdicionFecha: () => EdicionFecha,
			getEdicionUsuario: () => EdicionUsuario,
		
		})
	}
}
module.exports = buildMakeNegocioOrden
