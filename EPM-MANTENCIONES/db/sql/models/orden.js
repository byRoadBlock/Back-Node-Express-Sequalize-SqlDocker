let sql = require('./../connection')
let { DataTypes } = require('sequelize')

const Orden = sql.define('Orden', {
	IdRegistro: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	IdOrden: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	IdTipo: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	Nombre: {
		type: DataTypes.STRING,
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
	tableName: 'ORDEN',
	timestamps: false
})

module.exports = Orden