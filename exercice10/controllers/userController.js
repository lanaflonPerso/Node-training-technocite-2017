const mongoose = require('mongoose');
exports.loginForm = (req, res, next) => {
    res.render('login')
}
exports.registerForm = (req, res, next) => {
    res.render('register')
}

exports.validateRegister = (req, res, next) => {
    req.sanitizeBody('name');
    req.checkBody('name', 'Vous devez entrer un nom').notEmpty();
    req.checkBody('email', 'Cet email n\'est pas valide').isEmail();
    req.checkBody('password', 'Le password est vide et ne le peut pas !').notEmpty();
    req.checkBody('password-confirm', 'La confirmation n\'est pas correte !').notEmpty();
    req.checkBody('password-confirm', 'La confirmation n\'est pas identique').equals(req.body.password);
    const errors = req.validationErrors();
    if (errors) {
        req.flash('error', errors.map(err => err.msg))
        res.render('register', { "user": req.body, 'flash': req.flash() })
    }
    // next();
}