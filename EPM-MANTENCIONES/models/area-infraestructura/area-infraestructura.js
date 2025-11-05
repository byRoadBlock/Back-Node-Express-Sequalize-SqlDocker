let buildMakeAreaInfraestructura = function(validator) {
	return function makeAreaInfraestructura({

		//IdRegistro,
		IdArea,
		IdInfraestructura,
		Descripcion,
		Estado,
		CreacionFecha,
		CreacionUsuario,
		EdicionFecha,
		EdicionUsuario,
	} = {}) {
		let {error} = validator({IdArea,IdInfraestructura,Descripcion,Estado,CreacionFecha,CreacionUsuario,EdicionFecha,EdicionUsuario,})
		if (error) throw new Error(error)
		return Object.freeze({
			//getIdRegistro: () => IdRegistro,
			getIdArea: () => IdArea,
			getIdInfraestructura: () => IdInfraestructura,
			getDescripcion: () => Descripcion,
			getEstado: () => Estado,
			getCreacionFecha: () => CreacionFecha,
			getCreacionUsuario: () => CreacionUsuario,
			getEdicionFecha: () => EdicionFecha,
			getEdicionUsuario: () => EdicionUsuario,
		
		})
	}
}
module.exports = buildMakeAreaInfraestructura
