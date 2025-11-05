let sql = require('./../connection')
let { DataTypes } = require('sequelize')

const InfraestructuraUbicacion = sql.define('InfraestructuraUbicacion', {
	IdRegistro: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	IdInfraestructura: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	IdUbicacion: {
		type: DataTypes.INTEGER,
		allowNull: false,
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
	tableName: 'INFRAESTRUCTURA_UBICACION',
	timestamps: false
})

module.exports = InfraestructuraUbicacion