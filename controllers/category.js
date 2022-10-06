const Category = require('../models/Category');

exports.create = async (req, res) => {
    const { category } = req.body;

    try {
        const categoryExist = await Category.findOne({ category });
        if (categoryExist) {
            return res.status(400).json({
                errorMessage: `${category} La Categoría Ya Existe.`,
            });
        }

        let newCategory = new Category();
        newCategory.category = category;

        newCategory = await newCategory.save();

        res.status(200).json({
            category: newCategory,
            successMessage: `${newCategory.category} ¡Ha Sido Éxitoso.!`,
        });
    } catch (err) {
        console.log('Error De Creación De Categoría: ', err);
        res.status(500).json({ 
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.', 
        });
    }
};

exports.readAll = async (req, res) => {
    try {
        const categories = await Category.find({});
        res.status(200).json({
            categories,
        });
    } catch (err) {
        console.log('Error Categoría readAll: ', err);
        res.status(500).json({ 
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.', 
        });
    }   
};

exports.delete = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const deletedCategory = await Category.findByIdAndDelete(categoryId);

        res.json(deletedCategory);
    } catch (err) {
        console.log(err, 'categoryController.delete error');
        res.status(500).json({
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde',
        });
    }
};