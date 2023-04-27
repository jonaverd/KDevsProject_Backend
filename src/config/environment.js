// Configuracion de variables de entorno personalizada / por defecto
require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  svrPort: process.env.SVR_PORT || 3000,
  dbUser:  process.env.DB_USER || '',
  dbPassword:  process.env.DB_PASSWORD || '',
  dbHost:  process.env.DB_HOST || 'localhost',
  dbPort:  process.env.DB_PORT || '27017',
  dbName:  process.env.DB_NAME || '',
}

// Cadena de conexion (con todos los parametros)
const dbUri = "mongodb://"
  +config.dbUser
  +":"+config.dbPassword
  +"@"+config.dbHost
  +":"+config.dbPort
  +"/"+config.dbName
  +"?authSource=admin&retryWrites=true&w=majority"

module.exports = { config, dbUri };
