let Joi = require('joi')

module.exports = Joi.object().keys(
	{
		//IdRegistro: Joi.number().integer().required().error(() => 'must have age as integer'),
		IdTipoUsuario: Joi.number().integer().required().error(() => 'must have age as integer'),
		Descripcion: Joi.string().required().error(() => 'must have prefect as date'),
		Estado: Joi.boolean().required().error(() => 'must have prefect booleanas'),
		CreacionFecha: Joi.date().required().error(() => 'must have prefect as date'),
		CreacionUsuario: Joi.string().required().error(() => 'must have prefect as date'),
		ModificacionFecha: Joi.date().optional().allow(null).error(() => 'must have prefect as date'),
		ModificacionUsuario: Joi.string().optional().allow(null).error(() => 'must have prefect as date'),
	}
)