const Sized = require('../models/Sized');
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
        let sized = new Sized();

        sized.fileName = filename;
        sized.productName = productName;
        sized.productCategory = productCategory;

        sized = await sized.save();

        res.status(200).json({
            successMessage: `${sized.productName} Fue Creado Con Éxito.`,
            productName: sized,
        });
    } catch (err) {
        console.log(err, 'sizedController.create error');
        res.status(500).json({
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
        });
    }
};

exports.readAll = async (req, res) => {
    try {
        const sizes = await Sized.find({}).populate(
			'productCategory', 
			'category'
		);
        res.status(200).json({ 
            sizes, 
        });    
    } catch (err) {
        console.log(err, 'sizedController.readAll error');
        res.status(500).json({
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
        });
    }    
};

exports.readByCount = async (req, res) => {
	try {
		const sizes = await Sized.find({})
			.populate('productCategory', 'category')
			.limit(6);
		res.status(200).json({ 
            sizes, 
        });
	} catch (err) {
		console.log(err, 'sizedController.readAll error');
		res.status(500).json({
			errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
		});
	}
};

exports.read = async (req, res) => {
	try {
		const sizedId = req.params.sizedId;
		const sized = await Sized.findById(sizedId);

		res.status(200).json(sized);
	} catch (err) {
		console.log(err, 'sizedController.read error');
		res.status(500).json({
			errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
		});
	}
};

exports.update = async (req, res) => {
	const sizedId = req.params.sizedId;

	if (req.file !== undefined) {
		req.body.fileName = req.file.filename;
	}

	const oldSized = await Sized.findByIdAndUpdate(sizedId, req.body);

	if (req.file !== undefined && req.file.filename !== oldSized.fileName) {
		fs.unlink(`uploadsSized/${oldSized.fileName}`, err => {
			if (err) throw err;
			console.log('Imagen Eliminada Del Sistema De Archivos.');
		});
	}

	res.status(200).json({
		successMessage: 'Talla Actualizado Con Éxito.',
	});
};

exports.delete = async (req, res) => {
    try {
        const sizedId = req.params.sizedId;
        const deletedSized = await Sized.findByIdAndDelete(sizedId);

        fs.unlink(`uploadsSized/${deletedSized.fileName}`, err => {
            if (err) throw err;
            console.log(
                'Imagen Eliminado Con Éxito Del Sistema De Archivos: ',
                deletedSized.fileName
            );
        });

        res.status(200).json(deletedSized);
    } catch (err) {
        console.log(err, 'sizedController.delete error');
        res.status(500).json({
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde',
        });
    }
};