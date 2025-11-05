let buildMakeDivisionArea = function(validator) {
	return function makeDivisionArea({

		//IdRegistro,
		IdDivision,
		IdArea,
		Descripcion,
		Estado,
		CreacionFecha,
		CreacionUsuario,
		EdicionFecha,
		EdicionUsuario,
	} = {}) {
		let {error} = validator({IdDivision,IdArea,Descripcion,Estado,CreacionFecha,CreacionUsuario,EdicionFecha,EdicionUsuario,})
		if (error) throw new Error(error)
		return Object.freeze({
			//getIdRegistro: () => IdRegistro,
			getIdDivision: () => IdDivision,
			getIdArea: () => IdArea,
			getDescripcion: () => Descripcion,
			getEstado: () => Estado,
			getCreacionFecha: () => CreacionFecha,
			getCreacionUsuario: () => CreacionUsuario,
			getEdicionFecha: () => EdicionFecha,
			getEdicionUsuario: () => EdicionUsuario,
		
		})
	}
}
module.exports = buildMakeDivisionArea
