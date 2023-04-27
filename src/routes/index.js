// Librerias del servidor + rutas principales importadas 
const express = require('express'); 
const playerRouter = require('./playerRouter.js');

// Declaracion de rutas principales
function routerApi(app) {
  const router = express.Router();
  app.use('/', router); 
  router.use('/players', playerRouter);
}

module.exports = routerApi;
