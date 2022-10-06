const express = require('express');
const router = express.Router();
const { authenticatateJWT } = require('../middleware/authenticator');
const upload = require('../middleware/multerGolden');
const goldenController = require('../controllers/golden');

router.post(
    '/', 
    authenticatateJWT, 
    upload.single('productImage'),
    goldenController.create   
);

router.get('/', goldenController.readAll);
router.get('/count', goldenController.readByCount);
router.get('/:goldenId', goldenController.read);
router.put(
	'/:goldenId',
	authenticatateJWT,
	upload.single('productImage'),
	goldenController.update
);
router.delete('/:goldenId', authenticatateJWT, goldenController.delete);

module.exports = router;