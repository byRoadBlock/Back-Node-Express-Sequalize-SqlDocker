let buildMakeTipoCliente = function(validator) {
	return function makeTipoCliente({

		//IdRegistro,
		IdTipo,
		Nombre,
		Descripcion,
		Estado,
		CreacionFecha,
		CreacionUsuario,
		ModificacionFecha,
		ModificacionUsuario,
	} = {}) {
		let {error} = validator({IdTipo,Nombre,Descripcion,Estado,CreacionFecha,CreacionUsuario,ModificacionFecha,ModificacionUsuario,})
		if (error) throw new Error(error)
		return Object.freeze({
			//getIdRegistro: () => IdRegistro,
			getIdTipo: () => IdTipo,
			getNombre: () => Nombre,
			getDescripcion: () => Descripcion,
			getEstado: () => Estado,
			getCreacionFecha: () => CreacionFecha,
			getCreacionUsuario: () => CreacionUsuario,
			getModificacionFecha: () => ModificacionFecha,
			getModificacionUsuario: () => ModificacionUsuario,
		
		})
	}
}
module.exports = buildMakeTipoCliente
