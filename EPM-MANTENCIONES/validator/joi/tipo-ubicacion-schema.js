let Joi = require('joi')

module.exports = Joi.object().keys(
	{
		//IdRegistro: Joi.number().integer().required().error(() => 'must have age as integer'),
		IdTipo: Joi.number().integer().required().error(() => 'must have age as integer'),
		Nombre: Joi.string().required().error(() => 'must have prefect as date'),
		Descripcion: Joi.string().optional().allow(null).error(() => 'must have prefect as date'),
		Estado: Joi.boolean().required().error(() => 'must have prefect booleanas'),
		type: DataTypes.DATETIME,
		CreacionUsuario: Joi.string().required().error(() => 'must have prefect as date'),
		type: DataTypes.DATETIME,
		EdicionUsuario: Joi.string().optional().allow(null).error(() => 'must have prefect as date'),
	}
)