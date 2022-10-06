const express = require('express');
const router = express.Router();
const { authenticatateJWT } = require('../middleware/authenticator');
const upload = require('../middleware/multerRock');
const rockController = require('../controllers/rock');

router.post(
    '/', 
    authenticatateJWT, 
    upload.single('productImage'),
    rockController.create   
);

router.get('/', rockController.readAll);
router.get('/count', rockController.readByCount);
router.get('/:rockId', rockController.read);
router.put(
	'/:rockId',
	authenticatateJWT,
	upload.single('productImage'),
	rockController.update
);
router.delete('/:rockId', authenticatateJWT, rockController.delete);

module.exports = router;