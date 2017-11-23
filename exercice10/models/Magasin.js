const mongoose = require('mongoose');
const magasinSchema = new mongoose.Schema({
    name:{
        type: String,
        required:'Merci d\'encoder le nom du magasin'
    },
    slug:{
        type:String,
        trim:true
    },
    description:{
        type: String
    },
})

module.exports = mongoose.model('Magasin',magasinSchema);