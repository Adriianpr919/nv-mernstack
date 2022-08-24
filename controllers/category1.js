const Size = require('../models/category1');

exports.create = async (req, res) => {
    const { size } = req.body;

    try {
        let newSize = new Size();
        newSize.size = size;

        newSize = await newSize.save();

        res.status(200).json({
            successMessage: `${newSize.size} ¡Ha Sido Éxitoso.!`,
        });
    } catch (err) {
        console.log('Error De Creación De Talla: ', err);
        res.status(500).json({ 
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.', 
        });
    }
};