const Size = require('../models/size');
const fs = require('fs');

exports.create = async (req, res) => {
    const {
        filename,
    } = req.file;
    const {
        productName,
        productCategory,
    } = req.body;

    try {
        let size = new Size();

        size.fileName = filename;
        size.productName = productName;
        size.productCategory = productCategory;

        await size.save();

        res.json({
            successMessage: `${productName} Fue Creado Con Éxito.`,
            size,
        });
    } catch (err) {
        console.log(err, 'sizeController.create error');
        res.status(500).json({
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
        });
    }
};

exports.readAll = async (req, res) => {
    try {
        const sizes = await Size.find({}).populate(
			'productCategory', 
			'category'
		);
        
        res.json({ sizes });    
    } catch (err) {
        console.log(err, 'sizeController.readAll error');
        res.status(500).json({
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
        });
    }    
};

exports.readByCount = async (req, res) => {
	try {
		const sizes = await Size.find({})
			.populate('productCategory', 'category')
			.limit(6);

		res.json({ sizes });
	} catch (err) {
		console.log(err, 'sizeController.readAll error');
		res.status(500).json({
			errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
		});
	}
};

exports.read = async (req, res) => {
	try {
		const sizeId = req.params.sizeId;
		const size = await Size.findById(sizeId);

		res.json(size);
	} catch (err) {
		console.log(err, 'sizeController.read error');
		res.status(500).json({
			errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
		});
	}
};

exports.update = async (req, res) => {
	const sizeId = req.params.sizeId;

	if (req.file !== undefined) {
		req.body.fileName = req.file.filename;
	}

	const oldSize = await Size.findByIdAndUpdate(sizeId, req.body);

	if (req.file !== undefined && req.file.filename !== oldSize.fileName) {
		fs.unlink(`uploadsSize/${oldSize.fileName}`, err => {
			if (err) throw err;
			console.log('Imagen Eliminada Del Sistema De Archivos.');
		});
	}

	res.json({
		successMessage: 'Talla Actualizado Con Éxito.',
	});
};

exports.delete = async (req, res) => {
    try {
        const sizeId = req.params.sizeId;
        const deletedSize = await Size.findByIdAndDelete(sizeId);

        fs.unlink(`uploadsSize/${deletedSize.fileName}`, err => {
            if (err) throw err;
            console.log(
                'Imagen Eliminado Con Éxito Del Sistema De Archivos: ',
                deletedSize.fileName
            );
        });

        res.json(deletedSize);
    } catch (err) {
        console.log(err, 'sizeController.delete error');
        res.status(500).json({
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde',
        });
    }
};