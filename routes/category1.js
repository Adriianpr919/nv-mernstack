const express = require('express');
const router = express.Router();
const sizeController = require('../controllers/category1');
const { authenticatateJWT } = require('../middleware/authenticator');

router.post('/', authenticatateJWT, sizeController.create);

module.exports = router;