let buildMakeServicioDetalle = function(validator) {
	return function makeServicioDetalle({

		//IdRegistro,
		IdServicio,
		IdDetalle,
		Descripcion,
		Valor,
		Estado,
		CreacionFecha,
		CreacionUsuario,
		EdicionFecha,
		EdicionUsuario,
	} = {}) {
		let {error} = validator({IdServicio,IdDetalle,Descripcion,Valor,Estado,CreacionFecha,CreacionUsuario,EdicionFecha,EdicionUsuario,})
		if (error) throw new Error(error)
		return Object.freeze({
			//getIdRegistro: () => IdRegistro,
			getIdServicio: () => IdServicio,
			getIdDetalle: () => IdDetalle,
			getDescripcion: () => Descripcion,
			getValor: () => Valor,
			getEstado: () => Estado,
			getCreacionFecha: () => CreacionFecha,
			getCreacionUsuario: () => CreacionUsuario,
			getEdicionFecha: () => EdicionFecha,
			getEdicionUsuario: () => EdicionUsuario,
		
		})
	}
}
module.exports = buildMakeServicioDetalle
