const express = require('express');
const router = express.Router();
const category1Controller = require('../controllers/category1');
const { authenticatateJWT } = require('../middleware/authenticator');

router.post('/', authenticatateJWT ,category1Controller.create);

module.exports = router;