require('dotenv').config();

module.exports = {
  development: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: 'mysql',
      timezone: '+03:00',
  },

  test: {
      username: 'root',
      password: null,
      database: 'family_test',
      host: '127.0.0.1',
      port: '3306',
      dialect: 'mysql',
  },

  production: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: process.env.DB_CONNECTION,
      dialectOptions: {
          ssl: {
              require: true,
              rejectUnauthorized: false,
          }
      },
      timezone: '+03:00',
      ssl: {
          require: true,
          rejectUnauthorized: false,
      }
  }

}