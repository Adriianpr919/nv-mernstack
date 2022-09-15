const Product = require('../models/product');
const fs = require('fs');

exports.create = async (req, res) => {
    console.log('req.body: ', req.body);
    console.log('req.file: ', req.file);
    console.log('req.user: ', req.user);

    const {
        filename1, 
        filename2, 
        filename3, 
        filename4, 
        filename5, 
        filename6, 
        filename7, 
        filename8,
    } = req.file;
    const {
        productName,
        productCategory,
        productSize,
        productGold,
        productStone,
        productPreviousPrice,
        productActualPrice,
        productQty,
        productDesc,
    } = req.body;

    try {
        let product = new Product();
        product.productName = productName;
        product.productCategory = productCategory;
        product.productSize = productSize;
        product.productGold = productGold;
        product.productStone = productStone;
        product.productPreviousPrice = productPreviousPrice;
        product.productActualPrice = productActualPrice;
        product.productQty = productQty;
        product.productDesc = productDesc;
        product.fileName1 = filename1;
        product.fileName2 = filename2;
        product.fileName3 = filename3;
        product.fileName4 = filename4;
        product.fileName5 = filename5;
        product.fileName6 = filename6;
        product.fileName7 = filename7;
        product.fileName8 = filename8;

        await product.save();

        res.json({
            successMessage: `${productName} Fue Creado Con Éxito.`,
            product,
        });
    } catch (err) {
        console.log(err, 'productController.create error');

        res.status(500).json({
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
        });
    }
};

exports.readAll = async (req, res) => {
    try {
        const products = await Product.find({}).populate(
                'productCategory',
                'category',
                'size',
                'gold',
                'stone'
        );
        res.json({ products });    
    } catch (err) {
        console.log(err, 'productController.readAll error');

        res.status(500).json({
            errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde.',
        });
    }    
};

exports.delete = async (req, res) => {
	try {
		const productId = req.params.productId;
		const deletedProduct = await Product.findByIdAndDelete(productId);

		fs.unlink(`uploads/${deletedProduct.fileName}`, err => {
			if (err) throw err;
			console.log(
				'Imagen Eliminado Con Éxito Del Sistema De Archivos: ',
				deletedProduct.fileName
			);
		});

		res.json(deletedProduct);
	} catch (err) {
		console.log(err, 'productController.delete error');
		res.status(500).json({
			errorMessage: 'Por Favor, Inténtelo De Nuevo Más Tarde',
		});
	}
};