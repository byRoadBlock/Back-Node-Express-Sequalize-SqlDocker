let sql = require('./../connection')
let { DataTypes } = require('sequelize')

const DivisionArea = sql.define('DivisionArea', {
	IdRegistro: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	IdDivision: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	IdArea: {
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
	tableName: 'DIVISION_AREA',
	timestamps: false
})

module.exports = DivisionArea