const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
mongoose.promise = global.Promise;
const md5 = require("md5");
const validator = require('validator');
const mongodbErrorHandler = require("mongoose-mongodb-errors")
const passportLocalMongoose = require("passport-local-mongoose")


const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        validate: [validator.isEmail, "Address email invalide"],
        required: "Introduisez une addresse email valid svp !!!"
    },
    name: {
        type: String,
        required: true,
        trim: true
    }
})
userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
userSchema.plugin(mongodbErrorHandler)
module.exports = mongoose.model('User', userSchema);