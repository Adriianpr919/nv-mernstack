const Stone = require('../models/category3');

exports.create = async (req, res) => {
    const { stone } = req.body;

    try {
        let newStone = new Stone();
        newStone.stone = stone;

        newStone = await newStone.save();

        res.status(200).json({
            successMessage: `${newStone.stone} ¡Ha Sido Éxitoso.!`,
        });
    } catch (err) {
        console.log('Error De Creación De Color De Piedra: ', err);
        res.status(500).json({ 
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.', 
        });
    }
};