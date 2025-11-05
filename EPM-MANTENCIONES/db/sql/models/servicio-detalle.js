let sql = require('./../connection')
let { DataTypes } = require('sequelize')

const ServicioDetalle = sql.define('ServicioDetalle', {
	IdRegistro: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	IdServicio: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	IdDetalle: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	Descripcion: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	Valor: {
		type: DataTypes.DECIMAL,
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
	tableName: 'SERVICIO_DETALLE',
	timestamps: false
})

module.exports = ServicioDetalle