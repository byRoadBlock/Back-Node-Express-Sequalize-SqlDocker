let buildMakeCargo = function(validator) {
	return function makeCargo({

		//IdRegistro,
		IdCargo,
		IdTipo,
		Nombre,
		Descripcion,
		Estado,
		CreacionFecha,
		CreacionUsuario,
		EdicionFecha,
		EdicionUsuario,
	} = {}) {
		let {error} = validator({IdCargo,IdTipo,Nombre,Descripcion,Estado,CreacionFecha,CreacionUsuario,EdicionFecha,EdicionUsuario,})
		if (error) throw new Error(error)
		return Object.freeze({
			//getIdRegistro: () => IdRegistro,
			getIdCargo: () => IdCargo,
			getIdTipo: () => IdTipo,
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
module.exports = buildMakeCargo
