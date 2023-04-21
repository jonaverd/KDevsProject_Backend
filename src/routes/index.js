const express = require('express'); 

const testRouter = require('./testRouter');

function routerApi(app) {
  const router = express.Router();
  app.use('/', router); 
  router.use('/test', testRouter);
}

module.exports = routerApi;
