const { Sequelize } = require('sequelize');
require('dotenv').config();
const config = require('../../config');
const sequelize = new Sequelize(
	config.sql.DATABASE, 
	config.sql.USER, 
	config.sql.PASSWORD,
	{
		host: config.sql.HOST,
		port: config.sql.PORT,
		dialect: 'mssql',
		dialectOptions: {
		options: {
			encrypt: true,
			trustServerCertificate: true
			}
		},
		logging: false
	}
);

module.exports = sequelize;
