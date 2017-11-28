const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.promise= global.Promise;
const md5 = require("md5");
const validator = require('validator');
const mongodbErrorHandler = require("mongoose-mongodb-errors")
const passportLocalMongoose = require("passport-local-mongoose")
const userSchema = new Schema({
    email : {
        type:String,
        unique:true
    }
})

module.exports = mongoose.model('User',userSchema);