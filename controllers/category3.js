const Stone = require('../models/category3');

exports.create = async (req, res) => {
    const { stone } = req.body;

    try {
        const categoryExist = await Stone.findOne({ stone });
        if (categoryExist) {
            return res.status(400).json({
                errorMessage: `${stone} El Color De Piedra Ya Existe.`,
            });
        }

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

exports.readAll = async (req, res) => {
    try {
        const categories = await Stone.find({});

        res.status(200).json({
            categories,
        });
    } catch (err) {
        console.log('Error Color De Piedra readAll: ', err);
        res.status(500).json({ 
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.', 
        });
    }   
};