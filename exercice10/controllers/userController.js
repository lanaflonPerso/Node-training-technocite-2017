const mongoose= require('mongoose');
exports.loginForm =(req,res,next)=>{
    res.render('login')
}
exports.registerForm =(req,res,next)=>{
    res.render('register')
}