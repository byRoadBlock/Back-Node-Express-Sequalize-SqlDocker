let sql = require('./../connection')
let { DataTypes } = require('sequelize')

const NegocioDetalle = sql.define('NegocioDetalle', {
	IdRegistro: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	IdDetalle: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	IdNegocio: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	IdServicio: {
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
	tableName: 'NEGOCIO_DETALLE',
	timestamps: false
})

module.exports = NegocioDetalle