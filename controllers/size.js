const Sized = require('../models/size');

exports.create = async (req, res) => {
    const { sized } = req.body;

    try {
        const sizedExist = await Sized.findOne({ sized });
        if (sizedExist) {
            return res.status(400).json({
                errorMessage: `${sized} La Talla Ya Existe.`,
            });
        }

        let newSized = new Sized();
        newSized.sized = sized;

        newSized = await newSized.save();

        res.status(200).json({
            sized: newSized,
            successMessage: `${newSized.sized} ¡Ha Sido Éxitoso.!`,
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
        const sizes = await Sized.find({});
        res.status(200).json({ 
            sizes, 
        });    
    } catch (err) {
        console.log('Error Talla readAll: ', err);
        res.status(500).json({
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
        });
    }    
};