const Gold = require('../models/category2');

exports.create = async (req, res) => {
    const { gold } = req.body;

    try {
        const categoryExist = await Gold.findOne({ gold });
        if (categoryExist) {
            return res.status(400).json({
                errorMessage: `${gold} El Color De Oro Ya Existe.`,
            });
        }

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

exports.readAll = async (req, res) => {
    try {
        const categories = await Gold.find({});

        res.status(200).json({
            categories,
        });
    } catch (err) {
        console.log('Error Color De Oro readAll: ', err);
        res.status(500).json({ 
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.', 
        });
    }   
};