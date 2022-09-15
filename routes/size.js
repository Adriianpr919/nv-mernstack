const express = require('express');
const router = express.Router();
const sizeController = require('../controllers/size');
const { authenticatateJWT } = require('../middleware/authenticator');

router.post('/', authenticatateJWT, sizeController.create);
router.get('/', authenticatateJWT, sizeController.readAll);

module.exports = router;