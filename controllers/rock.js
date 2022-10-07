const Rock = require('../models/Rock');
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
        let rock = new Rock();

        rock.fileName = filename;
        rock.productName = productName;
        rock.productCategory = productCategory;

        await rock.save();

        res.json({
            successMessage: `${productName} Fue Creado Con Éxito.`,
            rock,
        });
    } catch (err) {
        console.log(err, 'rockController.create error');
        res.status(500).json({
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
        });
    }
};

exports.readAll = async (req, res) => {
    try {
        const stones = await Rock.find({}).populate(
			'productCategory', 
			'category'
		);
        
        res.json({ stones, });    
    } catch (err) {
        console.log(err, 'rockController.readAll error');
        res.status(500).json({
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
        });
    }    
};

exports.readByCount = async (req, res) => {
	try {
		const stones = await Rock.find({})
			.populate('productCategory', 'category')
			.limit(6);

		res.json({ stones, });
	} catch (err) {
		console.log(err, 'rockController.readAll error');
		res.status(500).json({
			errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
		});
	}
};

exports.read = async (req, res) => {
	try {
		const rockId = req.params.rockId;
		const rock = await Rock.findById(rockId);

		res.json(rock);
	} catch (err) {
		console.log(err, 'rockController.read error');
		res.status(500).json({
			errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
		});
	}
};

exports.update = async (req, res) => {
	const rockId = req.params.rockId;

	if (req.file !== undefined) {
		req.body.fileName = req.file.filename;
	}

	const oldRock = await Rock.findByIdAndUpdate(rockId, req.body);

	if (req.file !== undefined && req.file.filename !== oldRock.fileName) {
		fs.unlink(`uploadsRock/${oldRock.fileName}`, err => {
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
        const rockId = req.params.rockId;
        const deletedRock = await Rock.findByIdAndDelete(rockId);

        fs.unlink(`uploadsRock/${deletedRock.fileName}`, err => {
            if (err) throw err;
            console.log(
                'Imagen Eliminado Con Éxito Del Sistema De Archivos: ',
                deletedRock.fileName
            );
        });

        res.json(deletedRock);
    } catch (err) {
        console.log(err, 'rockController.delete error');
        res.status(500).json({
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde',
        });
    }
};