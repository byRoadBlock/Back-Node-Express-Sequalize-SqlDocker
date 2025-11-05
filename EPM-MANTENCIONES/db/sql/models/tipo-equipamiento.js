let sql = require('./../connection')
let { DataTypes } = require('sequelize')

const TipoEquipamiento = sql.define('TipoEquipamiento', {
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
	tableName: 'TIPO_EQUIPAMIENTO',
	timestamps: false
})

module.exports = TipoEquipamiento