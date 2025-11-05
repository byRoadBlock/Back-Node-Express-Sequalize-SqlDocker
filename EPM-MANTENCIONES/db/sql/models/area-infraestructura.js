let sql = require('./../connection')
let { DataTypes } = require('sequelize')

const AreaInfraestructura = sql.define('AreaInfraestructura', {
	IdRegistro: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	IdArea: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	IdInfraestructura: {
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
	tableName: 'AREA_INFRAESTRUCTURA',
	timestamps: false
})

module.exports = AreaInfraestructura