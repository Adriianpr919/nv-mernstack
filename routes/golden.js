const express = require('express');
const router = express.Router();
const goldenController = require('../controllers/golden');
const { authenticatateJWT } = require('../middleware/authenticator');

router.post('/', authenticatateJWT, goldenController.create);
router.get('/', goldenController.readAll);
router.delete('/:goldenId', authenticatateJWT, goldenController.delete);

module.exports = router;