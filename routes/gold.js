const express = require('express');
const router = express.Router();
const { authenticatateJWT } = require('../middleware/authenticator');
const upload = require('../middleware/multerGold');
const goldController = require('../controllers/gold');

router.post(
    '/', 
    authenticatateJWT, 
    upload.single('productImage'),
    goldController.create   
);

router.get('/', goldController.readAll);
router.get('/count', goldController.readByCount);
router.get('/:goldId', goldController.read);
router.put(
	'/:goldId',
	authenticatateJWT,
	upload.single('productImage'),
	goldController.update
);
router.delete('/:goldId', authenticatateJWT, goldController.delete);

module.exports = router;