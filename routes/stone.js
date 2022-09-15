const express = require('express');
const router = express.Router();
const stoneController = require('../controllers/stone');
const { authenticatateJWT } = require('../middleware/authenticator');

router.post('/', authenticatateJWT, stoneController.create);
router.get('/', authenticatateJWT, stoneController.readAll);

module.exports = router;