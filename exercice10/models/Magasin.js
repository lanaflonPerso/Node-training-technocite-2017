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
    photo:{
        type: String
    },
    location:{
        type:{
            type:String,
            default:'Point'
        },
        coordinates :[
            {
                type:Number,
                required:'Vous devez entrez des coordonnées'
            }
        ],
        address:{
            type: String,
            required: 'VOus devez fournir une addresse'
        }
    }
})

module.exports = mongoose.model('Magasin',magasinSchema);