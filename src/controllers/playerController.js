// Modelos importados
const playerModel = require('../models/playerModel.js')

// Lógica de negocio (código) de los controladores para esa ruta principal
const createPlayer = async ( req, res ) => {
    try {
        //creando y guardando en bbdd
        const data = new playerModel({
            name: req.body.name,
            team: req.body.team
        })
        const response = await data.save();
        console.log("Saving new player...")
        return res.status(201).json({
            success: true,
            message: "New player created successfully",
            results: response,
         });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error creating player",
            error: error.message,
         });
    }
}

const getPlayers = async ( req, res ) => {
    try {
        //recuperando de la bbdd
        const response = await playerModel.find();
        console.log("Getting all players...")
        return res.status(200).json({
           success: true,
           message: "Get all players retrieved successfully",
           results: response,
        });
     } catch (error) {
        return res.status(500).json({
           success: false,
           message: "Error retrieving players",
           error: error.message,
        });
     }
}

const deletePlayer = async ( req, res ) => {
    try {
        //borrando de la bbdd
        const response = await playerModel.deleteOne({ _id: req.params.id });
        console.log("Removing player...")
        return res.status(200).json({
           success: true,
           message: "Player deleted successfully",
           results: response,
        });
     } catch (error) {
        return res.status(500).json({
           success: false,
           message: "Error deleting player",
           error: error.message,
        });
     }
}

const updatePlayer = async ( req, res ) => {
    try {
        //borrando de la bbdd
        const response = await playerModel.updateOne(
            {
               _id: req.params.id
            },
            {
               name: req.body.name,
               team: req.body.team,
            }
         );
        console.log("Patching player...")
        return res.status(200).json({
           success: true,
           message: "Player updated successfully",
           results: response,
        });
     } catch (error) {
        return res.status(500).json({
           success: false,
           message: "Error updating player",
           error: error.message,
        });
     }
}



module.exports = { createPlayer, getPlayers, deletePlayer, updatePlayer };
