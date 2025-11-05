let buildMakeUsuario = function(validator) {
	return function makeUsuario({

		//IdRegistro,
		IdUsuario,
		IdTipoUsuario,
		Nombres,
		Apellidos,
		Correo,
		Telefono,
		Edad,
		Sexo,
		Estado,
		CreacionFecha,
		CreacionUsuario,
		ModificacionFecha,
		ModificacionUsuario,
	} = {}) {
		let {error} = validator({IdUsuario,IdTipoUsuario,Nombres,Apellidos,Correo,Telefono,Edad,Sexo,Estado,CreacionFecha,CreacionUsuario,ModificacionFecha,ModificacionUsuario,})
		if (error) throw new Error(error)
		return Object.freeze({
			//getIdRegistro: () => IdRegistro,
			getIdUsuario: () => IdUsuario,
			getIdTipoUsuario: () => IdTipoUsuario,
			getNombres: () => Nombres,
			getApellidos: () => Apellidos,
			getCorreo: () => Correo,
			getTelefono: () => Telefono,
			getEdad: () => Edad,
			getSexo: () => Sexo,
			getEstado: () => Estado,
			getCreacionFecha: () => CreacionFecha,
			getCreacionUsuario: () => CreacionUsuario,
			getModificacionFecha: () => ModificacionFecha,
			getModificacionUsuario: () => ModificacionUsuario,
		
		})
	}
}
module.exports = buildMakeUsuario
