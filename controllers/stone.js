const Stone = require('../models/stone');
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
        let stone = new Stone();

        stone.fileName = filename;
        stone.productName = productName;
        stone.productCategory = productCategory;

        await stone.save();

        res.json({
            successMessage: `${productName} Fue Creado Con Éxito.`,
            stone,
        });
    } catch (err) {
        console.log(err, 'stoneController.create error');
        res.status(500).json({
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
        });
    }
};

exports.readAll = async (req, res) => {
    try {
        const stones = await Stone.find({}).populate(
			'productCategory', 
			'category'
		);
        
        res.json({ stones });    
    } catch (err) {
        console.log(err, 'stoneController.readAll error');
        res.status(500).json({
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
        });
    }    
};

exports.readByCount = async (req, res) => {
	try {
		const stones = await Stone.find({})
			.populate('productCategory', 'category')
			.limit(6);

		res.json({ stones });
	} catch (err) {
		console.log(err, 'stoneController.readAll error');
		res.status(500).json({
			errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
		});
	}
};

exports.read = async (req, res) => {
	try {
		const stoneId = req.params.stoneId;
		const stone = await Stone.findById(stoneId);

		res.json(stone);
	} catch (err) {
		console.log(err, 'stoneController.read error');
		res.status(500).json({
			errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
		});
	}
};

exports.update = async (req, res) => {
	const stoneId = req.params.stoneId;

	if (req.file !== undefined) {
		req.body.fileName = req.file.filename;
	}

	const oldStone = await Stone.findByIdAndUpdate(stoneId, req.body);

	if (req.file !== undefined && req.file.filename !== oldStone.fileName) {
		fs.unlink(`uploadsStone/${oldStone.fileName}`, err => {
			if (err) throw err;
			console.log('Imagen Eliminada Del Sistema De Archivos.');
		});
	}

	res.json({
		successMessage: 'Piedra Actualizado Con Éxito.',
	});
};

exports.delete = async (req, res) => {
    try {
        const stoneId = req.params.stoneId;
        const deletedStone = await Stone.findByIdAndDelete(stoneId);

        fs.unlink(`uploadsStone/${deletedStone.fileName}`, err => {
            if (err) throw err;
            console.log(
                'Imagen Eliminado Con Éxito Del Sistema De Archivos: ',
                deletedStone.fileName
            );
        });

        res.json(deletedStone);
    } catch (err) {
        console.log(err, 'stoneController.delete error');
        res.status(500).json({
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde',
        });
    }
};