const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');


exports.login = passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: ' Failed login',
    successRedirect: '/',
    successFlash: ' You are now logged in'
})