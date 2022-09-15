const express = require('express');
const router = express.Router();
const { authenticatateJWT } = require('../middleware/authenticator');
const upload = require('../middleware/multer');
const productController = require('../controllers/product');

router.post(
    '/', 
    authenticatateJWT, 
    upload.single('productImage1', 'productImage2', 'productImage3', 'productImage4', 'productImage5', 'productImage6', 'productImage7', 'productImage8'),
    productController.create   
);

router.get('/', productController.readAll);
router.delete('/:productId', authenticatateJWT, productController.delete);

module.exports = router;