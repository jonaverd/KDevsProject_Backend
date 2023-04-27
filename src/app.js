// Librerias del servidor
const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

// Variables de entorno (.env) a través del config
const { config } = require('./config/environment.js');

// Conexion con BBDD
require('./database/connection.js');

// Configuración del servidor
const app = express();
app.use(cors());
app.use(express.json());

// Ruta por defecto + rutas importadas
app.get('/', (req,res) => {
    res.send('KDevs server listening on port ' + config.svrPort);
});
routerApi(app);

// Escuchar peticiones
app.listen(config.svrPort,()=>{
    console.log("KDevs server listening on port", config.svrPort);
});
