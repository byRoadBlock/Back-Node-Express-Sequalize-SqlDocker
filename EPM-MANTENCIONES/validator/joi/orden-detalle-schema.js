let Joi = require('joi')

module.exports = Joi.object().keys(
	{
		//IdRegistro: Joi.number().integer().required().error(() => 'must have age as integer'),
		IdOrden: Joi.number().integer().required().error(() => 'must have age as integer'),
		IdTrabajo: Joi.number().integer().required().error(() => 'must have age as integer'),
		IdDetalle: Joi.number().integer().required().error(() => 'must have age as integer'),
		Nombre: Joi.string().required().error(() => 'must have prefect as date'),
		Descripcion: Joi.string().optional().allow(null).error(() => 'must have prefect as date'),
		IdEstado: Joi.number().integer().required().error(() => 'must have age as integer'),
		type: DataTypes.DATETIME,
		CreacionUsuario: Joi.string().required().error(() => 'must have prefect as date'),
		type: DataTypes.DATETIME,
		EdicionUsuario: Joi.string().optional().allow(null).error(() => 'must have prefect as date'),
	}
)