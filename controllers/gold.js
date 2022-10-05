const Gold = require('../models/gold');
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
        let gold = new Gold();

        gold.fileName = filename;
        gold.productName = productName;
        gold.productCategory = productCategory;

        await gold.save();

        res.json({
            successMessage: `${productName} Fue Creado Con Éxito.`,
            gold,
        });
    } catch (err) {
        console.log(err, 'goldController.create error');
        res.status(500).json({
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
        });
    }
};

exports.readAll = async (req, res) => {
    try {
        const golds = await Gold.find({}).populate(
			'productCategory', 
			'category'
		);
        
        res.json({ golds });    
    } catch (err) {
        console.log(err, 'goldController.readAll error');
        res.status(500).json({
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
        });
    }    
};

exports.readByCount = async (req, res) => {
	try {
		const golds = await Gold.find({})
			.populate('productCategory', 'category')
			.limit(6);

		res.json({ golds });
	} catch (err) {
		console.log(err, 'goldController.readAll error');
		res.status(500).json({
			errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
		});
	}
};

exports.read = async (req, res) => {
	try {
		const goldId = req.params.goldId;
		const gold = await Gold.findById(goldId);

		res.json(gold);
	} catch (err) {
		console.log(err, 'goldController.read error');
		res.status(500).json({
			errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
		});
	}
};

exports.update = async (req, res) => {
	const goldId = req.params.goldId;

	if (req.file !== undefined) {
		req.body.fileName = req.file.filename;
	}

	const oldGold = await Gold.findByIdAndUpdate(goldId, req.body);

	if (req.file !== undefined && req.file.filename !== oldGold.fileName) {
		fs.unlink(`uploadsGold/${oldGold.fileName}`, err => {
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
        const goldId = req.params.goldId;
        const deletedGold = await Gold.findByIdAndDelete(goldId);

        fs.unlink(`uploadsGold/${deletedGold.fileName}`, err => {
            if (err) throw err;
            console.log(
                'Imagen Eliminado Con Éxito Del Sistema De Archivos: ',
                deletedGold.fileName
            );
        });

        res.json(deletedGold);
    } catch (err) {
        console.log(err, 'goldController.delete error');
        res.status(500).json({
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde',
        });
    }
};