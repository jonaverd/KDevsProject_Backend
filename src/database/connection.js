// Librerias de BBDD
const mongoose = require("mongoose");

// Variables de entorno (.env) a través del config
const { config, dbUri } = require('../config/environment.js');

// Arrancar conexion
mongoose
  .connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch(err => console.log(err));
const db = mongoose.connection;

// Funciones de comprobacion
db.once("open", _ => {
  console.log("Database is connected to", "«private network»", config.dbPort );
});

db.on("error", err => {
  console.log(err);
});