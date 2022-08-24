const Gold = require('../models/category2');

exports.create = async (req, res) => {
    const { gold } = req.body;

    try {
        let newGold = new Gold();
        newGold.gold = gold;

        newGold = await newGold.save();

        res.status(200).json({
            successMessage: `${newGold.gold} ¡Ha Sido Éxitoso.!`,
        });
    } catch (err) {
        console.log('Error De Creación De Color De Oro: ', err);
        res.status(500).json({ 
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.', 
        });
    }
};