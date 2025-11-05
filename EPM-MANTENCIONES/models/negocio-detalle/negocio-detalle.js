let buildMakeNegocioDetalle = function(validator) {
	return function makeNegocioDetalle({

		//IdRegistro,
		IdDetalle,
		IdNegocio,
		IdServicio,
		Nombre,
		Descripcion,
		Estado,
		CreacionFecha,
		CreacionUsuario,
		EdicionFecha,
		EdicionUsuario,
	} = {}) {
		let {error} = validator({IdDetalle,IdNegocio,IdServicio,Nombre,Descripcion,Estado,CreacionFecha,CreacionUsuario,EdicionFecha,EdicionUsuario,})
		if (error) throw new Error(error)
		return Object.freeze({
			//getIdRegistro: () => IdRegistro,
			getIdDetalle: () => IdDetalle,
			getIdNegocio: () => IdNegocio,
			getIdServicio: () => IdServicio,
			getNombre: () => Nombre,
			getDescripcion: () => Descripcion,
			getEstado: () => Estado,
			getCreacionFecha: () => CreacionFecha,
			getCreacionUsuario: () => CreacionUsuario,
			getEdicionFecha: () => EdicionFecha,
			getEdicionUsuario: () => EdicionUsuario,
		
		})
	}
}
module.exports = buildMakeNegocioDetalle
