const mongoose = require('mongoose');
const slug = require('slugs');
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
// function called before the save of our model
magasinSchema.pre('save', async function(next){
    // convertir en slug propre`ment
    this.slug=slug(this.name);
    // regexp qui dit prend le meme que le slug et les valeur optionnelle -0...9
    const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`,'i');
    // recherhce dans la db si tu touve dans la db ce slug
    const storeWithSlug = await this.constructor.find({slug:slugRegEx});
    if(storeWithSlug.length){
        this.slug=`${this.slug}-${storeWithSlug.length+1}`
    }
    next();
})

module.exports = mongoose.model('Magasin',magasinSchema);