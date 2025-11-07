let buildMakeClienteDetalle = function (validator) {
	return function makeClienteDetalle({

		//IdRegistro,
		IdCliente,
		IdDetalle,
		IdEstado,
		IdTipo,
		Nombre,
		Descripcion,
		Estado,
		CreacionFecha,
		CreacionUsuario,
		EdicionFecha,
		EdicionUsuario,
	} = {}) {
		// let {error} = validator({IdCliente,IdEstado,IdDetalle,IdTipo,Nombre,Descripcion,Estado,CreacionFecha,CreacionUsuario,EdicionFecha,EdicionUsuario,})
		// if (error) throw new Error(error)

		const d = new Date();
		const pad = n => String(n).padStart(2, '0');

		return Object.freeze({
			//getIdRegistro: () => IdRegistro,
			getIdCliente: () => IdCliente,
			getIdDetalle: () => IdDetalle,
			getIdEstado: () => IdEstado,
			getIdTipo: () => IdTipo,
			getNombre: () => Nombre,
			getDescripcion: () => Descripcion,
			getEstado: () => Estado,
			getCreacionFecha: () => `${pad(d.getFullYear())}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`.toString(),
			getCreacionUsuario: () => CreacionUsuario,
			getEdicionFecha: () => null,
			getEdicionUsuario: () => null,

		})
	}
}
module.exports = buildMakeClienteDetalle
