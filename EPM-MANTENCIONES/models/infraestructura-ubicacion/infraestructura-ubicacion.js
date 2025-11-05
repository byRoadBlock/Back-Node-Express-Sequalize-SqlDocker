let buildMakeInfraestructuraUbicacion = function(validator) {
	return function makeInfraestructuraUbicacion({

		//IdRegistro,
		IdInfraestructura,
		IdUbicacion,
		Descripcion,
		Estado,
		CreacionFecha,
		CreacionUsuario,
		EdicionFecha,
		EdicionUsuario,
	} = {}) {
		let {error} = validator({IdInfraestructura,IdUbicacion,Descripcion,Estado,CreacionFecha,CreacionUsuario,EdicionFecha,EdicionUsuario,})
		if (error) throw new Error(error)
		return Object.freeze({
			//getIdRegistro: () => IdRegistro,
			getIdInfraestructura: () => IdInfraestructura,
			getIdUbicacion: () => IdUbicacion,
			getDescripcion: () => Descripcion,
			getEstado: () => Estado,
			getCreacionFecha: () => CreacionFecha,
			getCreacionUsuario: () => CreacionUsuario,
			getEdicionFecha: () => EdicionFecha,
			getEdicionUsuario: () => EdicionUsuario,
		
		})
	}
}
module.exports = buildMakeInfraestructuraUbicacion
