let sql = require('./../connection')
let { DataTypes } = require('sequelize')

const Usuario = sql.define('Usuario', {
	IdRegistro: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	IdUsuario: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	IdTipoUsuario: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	Nombres: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	Apellidos: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	Correo: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	Telefono: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	Edad: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	Sexo: {
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
	ModificacionFecha: {
		type: DataTypes.DATE,
		allowNull: true,
	},
	ModificacionUsuario: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	},{
	tableName: 'USUARIO',
	timestamps: false
})

module.exports = Usuario