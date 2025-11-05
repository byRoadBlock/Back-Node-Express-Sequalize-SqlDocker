let buildMakeOrden = function(validator) {
	return function makeOrden({

		//IdRegistro,
		IdOrden,
		IdTipo,
		Nombre,
		IdEstado,
		CreacionFecha,
		CreacionUsuario,
		EdicionFecha,
		EdicionUsuario,
	} = {}) {
		let {error} = validator({IdOrden,IdTipo,Nombre,IdEstado,CreacionFecha,CreacionUsuario,EdicionFecha,EdicionUsuario,})
		if (error) throw new Error(error)
		return Object.freeze({
			//getIdRegistro: () => IdRegistro,
			getIdOrden: () => IdOrden,
			getIdTipo: () => IdTipo,
			getNombre: () => Nombre,
			getIdEstado: () => IdEstado,
			getCreacionFecha: () => CreacionFecha,
			getCreacionUsuario: () => CreacionUsuario,
			getEdicionFecha: () => EdicionFecha,
			getEdicionUsuario: () => EdicionUsuario,
		
		})
	}
}
module.exports = buildMakeOrden
