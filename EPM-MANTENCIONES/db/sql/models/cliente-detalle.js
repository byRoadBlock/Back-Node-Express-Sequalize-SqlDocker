let sql = require('./../connection')
let { DataTypes } = require('sequelize')

const ClienteDetalle = sql.define('ClienteDetalle', {
	IdRegistro: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	IdCliente: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	IdDetalle: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	IdTipo: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	Nombre: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	Descripcion: {
		type: DataTypes.STRING,
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
	tableName: 'CLIENTE_DETALLE',
	timestamps: false
})

module.exports = ClienteDetalle