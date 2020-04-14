// load environment variables
require('dotenv').load();

const centralDBConfig = {
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	host: process.env.DB_HOST,
	dialect: 'postgres'
};

// export config for different environment setup
// note: You can have a separate DB config for each environment type if needed
module.exports = {
	development: centralDBConfig,
	test: centralDBConfig,
	production: centralDBConfig
};
