// Librerias del servidor + controladores importados
const express = require('express');
const router = express.Router(); 
const playerController = require('../controllers/playerController.js');

// Vincular sub-rutas con sus controladores
router.get('/', playerController.getPlayers );
router.post('/create', playerController.createPlayer );
router.delete('/delete/:id', playerController.deletePlayer );

// ¡Aclaracion! El metodo PUT se utiliza para evitar que mas de una persona actualice el recurso al mismo tiempo
// ¡Aclaracion! Es mas estricto que POST y se utiliza para operaciones de UPDATE en las API Rest
router.put('/update/:id', playerController.updatePlayer );

module.exports = router;
