let buildMakeEstadoOrden = function(validator) {
	return function makeEstadoOrden({

		//IdRegistro,
		IdEstado,
		Nombre,
		Descripcion,
		Transaccion,
		Estado,
		CreacionFecha,
		CreacionUsuario,
		EdicionFecha,
		EdicionUsuario,
	} = {}) {
		let {error} = validator({IdEstado,Nombre,Descripcion,Transaccion,Estado,CreacionFecha,CreacionUsuario,EdicionFecha,EdicionUsuario,})
		if (error) throw new Error(error)
		return Object.freeze({
			//getIdRegistro: () => IdRegistro,
			getIdEstado: () => IdEstado,
			getNombre: () => Nombre,
			getDescripcion: () => Descripcion,
			getTransaccion: () => Transaccion,
			getEstado: () => Estado,
			getCreacionFecha: () => CreacionFecha,
			getCreacionUsuario: () => CreacionUsuario,
			getEdicionFecha: () => EdicionFecha,
			getEdicionUsuario: () => EdicionUsuario,
		
		})
	}
}
module.exports = buildMakeEstadoOrden
