let sql = require('./../connection')
let { DataTypes } = require('sequelize')

const OrdenServicio = sql.define('OrdenServicio', {
	IdRegistro: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	IdOrden: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	IdServicio: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	IdDetalle: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	IdEstado: {
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
	tableName: 'ORDEN_SERVICIO',
	timestamps: false
})

module.exports = OrdenServicio