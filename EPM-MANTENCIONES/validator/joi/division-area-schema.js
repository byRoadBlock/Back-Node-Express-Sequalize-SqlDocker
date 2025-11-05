let Joi = require('joi')

module.exports = Joi.object().keys(
	{
		//IdRegistro: Joi.number().integer().required().error(() => 'must have age as integer'),
		IdDivision: Joi.number().integer().required().error(() => 'must have age as integer'),
		IdArea: Joi.number().integer().required().error(() => 'must have age as integer'),
		Descripcion: Joi.string().required().error(() => 'must have prefect as date'),
		Estado: Joi.boolean().required().error(() => 'must have prefect booleanas'),
		type: DataTypes.DATETIME,
		CreacionUsuario: Joi.string().required().error(() => 'must have prefect as date'),
		type: DataTypes.DATETIME,
		EdicionUsuario: Joi.string().optional().allow(null).error(() => 'must have prefect as date'),
	}
)