// Librerias de BBDD
const mongoose = require('mongoose');

// Definición del modelo (clase)
const Player = new mongoose.Schema({
    name: {
        type: String,
        default: null
    },
    team: {
        type: String,
        default: null
    },
})

// Vincular modelo con su tabla física
module.exports = mongoose.model('players', Player)