const express = require('express');
const router = express.Router();
const rockController = require('../controllers/rock');
const { authenticatateJWT } = require('../middleware/authenticator');

router.post('/', authenticatateJWT, rockController.create);
router.get('/', rockController.readAll);
router.delete('/:rockId', authenticatateJWT, rockController.delete);

module.exports = router;