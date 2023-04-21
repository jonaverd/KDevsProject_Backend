// Importar modelos

const get = async ( req, res ) => {
    try {
        const response = "Hola Mundo";
        res.json(response);
    } catch (error) {
        res.status(500).send({ 
            success: false, 
            message: error.message 
        });
    }
}

module.exports = { get };
