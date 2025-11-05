let Joi = require('joi')
module.exports = Joi.object().keys(
	{
		//IdRegistro: Joi.number().integer().required().error(() => 'must have age as integer'),
		IdOrden: Joi.number().integer().required().error(() => 'must have age as integer'),
		IdServicio: Joi.number().integer().required().error(() => 'must have age as integer'),
		IdDetalle: Joi.number().integer().required().error(() => 'must have age as integer'),
		IdEstado: Joi.boolean().required().error(() => 'must have prefect booleanas'),
		CreacionUsuario: Joi.string().required().error(() => 'must have prefect as date'),
		EdicionUsuario: Joi.string().optional().allow(null).error(() => 'must have prefect as date'),
	}
)