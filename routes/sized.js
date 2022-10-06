const express = require('express');
const router = express.Router();
const { authenticatateJWT } = require('../middleware/authenticator');
const upload = require('../middleware/multerSized');
const sizedController = require('../controllers/sized');

router.post(
    '/', 
    authenticatateJWT, 
    upload.single('productImage'),
    sizedController.create   
);

router.get('/', sizedController.readAll);
router.get('/count', sizedController.readByCount);
router.get('/:sizedId', sizedController.read);
router.put(
	'/:sizedId',
	authenticatateJWT,
	upload.single('productImage'),
	sizedController.update
);
router.delete('/:sizedId', authenticatateJWT, sizedController.delete);

module.exports = router;