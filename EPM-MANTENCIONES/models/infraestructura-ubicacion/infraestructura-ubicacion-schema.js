let Joi = require('joi')
module.exports = Joi.object().keys(
	{
		//IdRegistro: Joi.number().integer().required().error(() => 'must have age as integer'),
		IdInfraestructura: Joi.number().integer().required().error(() => 'must have age as integer'),
		IdUbicacion: Joi.number().integer().required().error(() => 'must have age as integer'),
		Descripcion: Joi.string().required().error(() => 'must have prefect as date'),
		Estado: Joi.boolean().required().error(() => 'must have prefect booleanas'),
		CreacionUsuario: Joi.string().required().error(() => 'must have prefect as date'),
		EdicionUsuario: Joi.string().optional().allow(null).error(() => 'must have prefect as date'),
	}
)