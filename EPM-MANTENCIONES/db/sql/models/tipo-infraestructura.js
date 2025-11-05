let sql = require('./../connection')
let { DataTypes } = require('sequelize')

const TipoInfraestructura = sql.define('TipoInfraestructura', {
	IdRegistro: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	IdTipo: {
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
	ModificacionFecha: {
		type: DataTypes.DATE,
		allowNull: true,
	},
	ModificacionUsuario: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	},{
	tableName: 'TIPO_INFRAESTRUCTURA',
	timestamps: false
})

module.exports = TipoInfraestructura