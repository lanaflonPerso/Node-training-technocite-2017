const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');


exports.login = passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: ' Failed login',
    successRedirect: '/',
    successFlash: ' You are now logged in'
})
exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
        return;
    }
    req.flash('error', 'oups you must be logged in');
    res.redirect('/login');
}
exports.logout = (req, res) => {
    req.logout();
    req.flash('success', 'Vous êtes bien sorti');
    res.redirect('/')
}