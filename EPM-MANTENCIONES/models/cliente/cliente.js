let buildMakeCliente = function (validator) {
	return function makeCliente({

		//IdRegistro,
		IdCliente,
		Estado,
		// CreacionFecha,
		CreacionUsuario,
		// EdicionFecha,
		// EdicionUsuario,
	} = {}) {
		// console.log(IdCliente, Estado, CreacionUsuario)
		// let {error} = validator({IdCliente,Estado,CreacionUsuario})
		// if (error) throw new Error(error)

		const d = new Date();
		const pad = n => String(n).padStart(2, '0');

		return Object.freeze({
			//getIdRegistro: () => IdRegistro,
			getIdCliente: () => IdCliente,
			getEstado: () => Estado,
			getCreacionFecha: () => `${pad(d.getFullYear())}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`.toString(),
			getCreacionUsuario: () => CreacionUsuario,
			getEdicionFecha: () => null,
			getEdicionUsuario: () => null,

		})
	}
}
module.exports = buildMakeCliente
