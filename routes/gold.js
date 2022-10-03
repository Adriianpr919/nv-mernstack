const express = require('express');
const router = express.Router();
const goldController = require('../controllers/gold');
const { authenticatateJWT } = require('../middleware/authenticator');

router.post('/', authenticatateJWT, goldController.create);
router.get('/', goldController.readAll);

module.exports = router;