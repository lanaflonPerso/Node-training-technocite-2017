const mongoose = require('mongoose');
const Magasin = mongoose.model('Magasin');
exports.getMagasins = async (req,res)=>{
    const magasins = await Magasin.find();
    res.render('magasins',{"magasins":magasins});
   
}