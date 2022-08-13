const { check, validationResult } = require('express-validator');

exports.signupValidator = [
    check('username').not().isEmpty().trim().withMessage('Todos Los Campos Requeridos.'),
    check('email').isEmail().normalizeEmail().withMessage('Tu Correo Inválido.'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('La Contraseña Debe Tener Al Menos 6 Caracteres.'),
];

exports.validatorResult = (req, res, next) => {
    const result = validationResult(req);
    const hasErrors = !result.isEmpty();

    if (hasErrors) {
        const firstError = result.array()[0].msg;
        return res.status(400).json({
            errorMessage: firstError,
        });
    }

    next();
};