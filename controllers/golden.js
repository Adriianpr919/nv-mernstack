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

        await golden.save();

        res.json({
            successMessage: `${productName} Fue Creado Con Éxito.`,
            golden,
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
        const goldens = await Golden.find({}).populate(
			'productCategory',
			'category'
		);

        res.json({ goldens });
    } catch (err) {
        console.log(err, 'goldenController.readAll error');
        res.status(500).json({
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
        });
    }
};

exports.readByCount = async (req, res) => {
	try {
		const goldens = await Golden.find({})
			.populate('productCategory', 'category')
			.limit(6);

		res.json({ goldens });
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

		res.json(golden);
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

	res.json({
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
                'Imagen Eliminada Con Éxito Del Sistema De Archivos: ',
                deletedGolden.fileName
            );
        });

        res.json(deletedGolden);
    } catch (err) {
        console.log(err, 'goldenController.delete error');
        res.status(500).json({
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde',
        });
    }
};