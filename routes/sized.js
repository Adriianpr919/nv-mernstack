const express = require('express');
const router = express.Router();
const sizedController = require('../controllers/sized');
const { authenticatateJWT } = require('../middleware/authenticator');

router.post('/', authenticatateJWT, sizedController.create);
router.get('/', sizedController.readAll);
router.delete('/:sizedId', authenticatateJWT, sizedController.delete);

module.exports = router;