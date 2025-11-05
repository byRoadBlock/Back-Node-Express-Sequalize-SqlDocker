let sql = require('./../connection')
let { DataTypes } = require('sequelize')

const CategoriaServicio = sql.define('CategoriaServicio', {
	IdRegistro: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	IdCategoria: {
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
	tableName: 'CATEGORIA_SERVICIO',
	timestamps: false
})

module.exports = CategoriaServicio