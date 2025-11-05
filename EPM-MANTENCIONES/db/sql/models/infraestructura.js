let sql = require('./../connection')
let { DataTypes } = require('sequelize')

const Infraestructura = sql.define('Infraestructura', {
	IdRegistro: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	IdInfraestructura: {
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
	tableName: 'INFRAESTRUCTURA',
	timestamps: false
})

module.exports = Infraestructura