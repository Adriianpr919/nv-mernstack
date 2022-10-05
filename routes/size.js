const express = require('express');
const router = express.Router();
const { authenticatateJWT } = require('../middleware/authenticator');
const upload = require('../middleware/multerSize');
const sizeController = require('../controllers/size');

router.post(
    '/', 
    authenticatateJWT, 
    upload.single('productImage'),
    sizeController.create   
);

router.get('/', sizeController.readAll);
router.get('/count', sizeController.readByCount);
router.get('/:sizeId', sizeController.read);
router.put(
	'/:sizeId',
	authenticatateJWT,
	upload.single('productImage'),
	sizeController.update
);
router.delete('/:sizeId', authenticatateJWT, sizeController.delete);

module.exports = router;