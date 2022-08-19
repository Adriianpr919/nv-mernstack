const Category1 = require('../models/category1');

exports.create = async (req, res) => {
    const { category1 } = req.body;

    try {
        let newCategory = new Category1();
        newCategory.category1 = category1;

        newCategory = await newCategory.save();

        res.status(200).json({
            successMessage: `${newCategory.category1} ¡Ha Sido Éxitoso.!`,
        });
    } catch (err) {
        console.log('Error De Creación De Categoría: ', err);
        res.status(500).json({ 
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.', 
        });
    }
};