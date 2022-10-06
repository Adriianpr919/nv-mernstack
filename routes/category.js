const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category');
const { authenticatateJWT } = require('../middleware/authenticator');

router.post('/', authenticatateJWT, categoryController.create);
router.get('/', categoryController.readAll);
router.delete('/:categoryId', authenticatateJWT, categoryController.delete);

module.exports = router;