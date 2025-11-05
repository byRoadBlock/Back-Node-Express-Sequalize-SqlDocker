let Joi = require('joi')
module.exports = Joi.object().keys(
	{
		//IdRegistro: Joi.number().integer().required().error(() => 'must have age as integer'),
		IdUsuario: Joi.number().integer().required().error(() => 'must have age as integer'),
		Login: Joi.string().required().error(() => 'must have prefect as date'),
		Password: Joi.string().required().error(() => 'must have prefect as date'),
		Estado: Joi.boolean().required().error(() => 'must have prefect booleanas'),
		CreacionFecha: Joi.date().required().error(() => 'must have prefect as date'),
		CreacionUsuario: Joi.string().required().error(() => 'must have prefect as date'),
		EdicionFecha: Joi.date().optional().allow(null).error(() => 'must have prefect as date'),
		EdicionUsuario: Joi.string().optional().allow(null).error(() => 'must have prefect as date'),
	}
)