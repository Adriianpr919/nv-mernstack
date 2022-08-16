const express = require('express');
const router = express.Router();
const { 
    signupValidator,
    signingValidator,
    validatorResult 
} = require('../middleware/validator');
const { signupController, signingController } = require('../controllers/auth');

router.post('/signup', signupValidator, validatorResult, signupController);
router.post('/signing', signingValidator, validatorResult, signingController);

module.exports = router;