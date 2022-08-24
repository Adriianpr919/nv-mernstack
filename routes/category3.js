const express = require('express');
const router = express.Router();
const stoneController = require('../controllers/category3');
const { authenticatateJWT } = require('../middleware/authenticator');

router.post('/', authenticatateJWT, stoneController.create);

module.exports = router;