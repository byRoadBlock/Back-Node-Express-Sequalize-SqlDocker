let sql = require('./../connection')
let { DataTypes } = require('sequelize')

const OrdenDetalle = sql.define('OrdenDetalle', {
	IdRegistro: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	IdOrden: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	IdTrabajo: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	IdDetalle: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	Nombre: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	Descripcion: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	IdEstado: {
		type: DataTypes.INTEGER,
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
	tableName: 'ORDEN_DETALLE',
	timestamps: false
})

module.exports = OrdenDetalle