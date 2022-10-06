const Golden = require('../models/Golden');
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
        let golden = new Golden();

        golden.fileName = filename;
        golden.productName = productName;
        golden.productCategory = productCategory;

        golden = await golden.save();

        res.status(200).json({
            successMessage: `${golden.productName} Fue Creado Con Éxito.`,
            productName: golden,
        });
    } catch (err) {
        console.log(err, 'goldenController.create error');
        res.status(500).json({
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
        });
    }
};

exports.readAll = async (req, res) => {
    try {
        const golds = await Golden.find({}).populate(
			'productCategory', 
			'category'
		);
        
        res.status(200).json({ golds, });    
    } catch (err) {
        console.log(err, 'goldenController.readAll error');
        res.status(500).json({
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
        });
    }    
};

exports.readByCount = async (req, res) => {
	try {
		const golds = await Golden.find({})
			.populate('productCategory', 'category')
			.limit(6);

		res.status(200).json({ golds, });
	} catch (err) {
		console.log(err, 'goldenController.readAll error');
		res.status(500).json({
			errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
		});
	}
};

exports.read = async (req, res) => {
	try {
		const goldenId = req.params.goldenId;
		const golden = await Golden.findById(goldenId);

		res.status(200).json(golden);
	} catch (err) {
		console.log(err, 'goldenController.read error');
		res.status(500).json({
			errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
		});
	}
};

exports.update = async (req, res) => {
	const goldenId = req.params.goldenId;

	if (req.file !== undefined) {
		req.body.fileName = req.file.filename;
	}

	const oldGolden = await Golden.findByIdAndUpdate(goldenId, req.body);

	if (req.file !== undefined && req.file.filename !== oldGolden.fileName) {
		fs.unlink(`uploadsGolden/${oldGolden.fileName}`, err => {
			if (err) throw err;
			console.log('Imagen Eliminada Del Sistema De Archivos.');
		});
	}

	res.status(200).json({
		successMessage: 'Oro Actualizado Con Éxito.',
	});
};

exports.delete = async (req, res) => {
    try {
        const goldenId = req.params.goldenId;
        const deletedGolden = await Golden.findByIdAndDelete(goldenId);

        fs.unlink(`uploadsGolden/${deletedGolden.fileName}`, err => {
            if (err) throw err;
            console.log(
                'Imagen Eliminado Con Éxito Del Sistema De Archivos: ',
                deletedGolden.fileName
            );
        });

        res.status(200).json(deletedGolden);
    } catch (err) {
        console.log(err, 'goldenController.delete error');
        res.status(500).json({
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde',
        });
    }
};