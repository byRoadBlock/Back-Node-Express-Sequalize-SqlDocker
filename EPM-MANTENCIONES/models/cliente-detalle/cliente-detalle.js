let buildMakeClienteDetalle = function(validator) {
	return function makeClienteDetalle({

		//IdRegistro,
		IdCliente,
		IdDetalle,
		IdTipo,
		Nombre,
		Descripcion,
		Estado,
		CreacionFecha,
		CreacionUsuario,
		EdicionFecha,
		EdicionUsuario,
	} = {}) {
		let {error} = validator({IdCliente,IdDetalle,IdTipo,Nombre,Descripcion,Estado,CreacionFecha,CreacionUsuario,EdicionFecha,EdicionUsuario,})
		if (error) throw new Error(error)
		return Object.freeze({
			//getIdRegistro: () => IdRegistro,
			getIdCliente: () => IdCliente,
			getIdDetalle: () => IdDetalle,
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
module.exports = buildMakeClienteDetalle
