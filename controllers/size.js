const Size = require('../models/size');

exports.create = async (req, res) => {
    const { size } = req.body;

    try {
        const categoryExist = await Size.findOne({ size });
        if (categoryExist) {
            return res.status(400).json({
                errorMessage: `${size} La Talla Ya Existe.`,
            });
        }

        let newSize = new Size();
        newSize.size = size;

        newSize = await newSize.save();

        res.status(200).json({
            size: newSize,
            successMessage: `${newSize.size} ¡Ha Sido Éxitoso.!`,
        });
    } catch (err) {
        console.log('Error De Creación De Talla: ', err);
        res.status(500).json({ 
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.', 
        });
    }
};

exports.readAll = async (req, res) => {
    try {
        const categoriesSize = await Size.find({});

        res.status(200).json({
            categoriesSize,
        });
    } catch (err) {
        console.log('Error Talla readAll: ', err);
        res.status(500).json({ 
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.', 
        });
    }   
};