require('dotenv').config();
module.exports = {
	NODE_ENV: process.env.NODE_ENV,
	PORT: process.env.PORT || 3000,
	sql:{
		HOST: process.env.DB_HOST,
		USER: process.env.DB_USER,
		DATABASE: process.env.DB_NAME,
		PASSWORD: process.env.DB_PASS,
		PORT: process.env.DB_PORT
	}
};
