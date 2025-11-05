let sql = require('./../connection')
let { DataTypes } = require('sequelize')

const NegocioOrden = sql.define('NegocioOrden', {
	IdRegistro: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	IdNegocio: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	IdServicio: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	IdOrden: {
		type: DataTypes.INTEGER,
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
	tableName: 'NEGOCIO_ORDEN',
	timestamps: false
})

module.exports = NegocioOrden