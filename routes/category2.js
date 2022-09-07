const express = require('express');
const router = express.Router();
const goldController = require('../controllers/category2');
const { authenticatateJWT } = require('../middleware/authenticator');

router.post('/', authenticatateJWT, goldController.create);
router.get('/', authenticatateJWT, goldController.readAll);

module.exports = router;