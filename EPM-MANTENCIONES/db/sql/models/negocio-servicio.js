let sql = require('./../connection')
let { DataTypes } = require('sequelize')

const NegocioServicio = sql.define('NegocioServicio', {
	IdRegistro: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	IdNegocio: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	IdServicio: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	Estado: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
	},
	CreacionFecha: {
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW,
		allowNull: false,
	},
	CreacionUsuario: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	EdicionFecha: {
		type: DataTypes.DATE,
		allowNull: true,
	},
	EdicionUsuario: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	},{
	tableName: 'NEGOCIO_SERVICIO',
	timestamps: false
})

module.exports = NegocioServicio