const mongoose = require('mongoose');
const Magasin = mongoose.model('Magasin');
exports.getMagasins = async (req, res) => {
    const magasins = await Magasin.find();
    res.render('magasins', { "magasins": magasins });
}
exports.getMagasinBySlug = async (req, res, next) => {
    const magasin = await Magasin.findOne({ slug: req.params.slug });
    if (!magasin) return next();
    res.render('magasin_details', { "magasin": magasin });
}

exports.addMagasin = async (req, res, next) => {
    res.render('magasin_edit');
}