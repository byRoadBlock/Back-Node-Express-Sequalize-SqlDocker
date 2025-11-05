let sql = require('./../connection')
let { DataTypes } = require('sequelize')

const UsuarioLogin = sql.define('UsuarioLogin', {
	IdRegistro: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	IdUsuario: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	Login: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	Password: {
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
	tableName: 'USUARIO_LOGIN',
	timestamps: false
})

module.exports = UsuarioLogin