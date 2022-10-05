const express = require('express');
const router = express.Router();
const { authenticatateJWT } = require('../middleware/authenticator');
const upload = require('../middleware/multerStone');
const stoneController = require('../controllers/stone');

router.post(
    '/', 
    authenticatateJWT, 
    upload.single('productImage'),
    stoneController.create   
);

router.get('/', stoneController.readAll);
router.get('/count', stoneController.readByCount);
router.get('/:stoneId', stoneController.read);
router.put(
	'/:stoneId',
	authenticatateJWT,
	upload.single('productImage'),
	stoneController.update
);
router.delete('/:stoneId', authenticatateJWT, stoneController.delete);

module.exports = router;