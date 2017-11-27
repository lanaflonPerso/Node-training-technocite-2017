const mongoose = require('mongoose');
const multer = require('multer');
const jimp = require('jimp');
const uuid = require('uuid');
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
    res.render('magasin_edit', { "magasin": {} });
}
exports.createMagasin = async (req, res, next) => {
    console.log(req.body)
    const magasin = await (new Magasin(req.body).save());
    res.redirect(`/magasins/${magasin.slug}`)
}

const multerOptions = {
    storage: multer.memoryStorage(),
    fileFilter(req, file, next) {
        const isPhoto = file.mimetype.startsWith('image/');
        if (isPhoto) {
            next(null, true)
        } else {
            next({ message: 'Tha filetype isn\'t allowed' }, false)
        }
    }
}

exports.upload = multer(multerOptions).single('photo')
exports.resize = async (req, res, next) => {
    if (!req.file) {
        next();
        return;
    }
    const extension = req.file.mimetype.split('/')[1];
    req.body.photo = `${uuid.v4()}.${extension}`;
    const photo = await jimp.read(req.file.buffer);
    await photo.resize(800, jimp.AUTO);
    await photo.write(`./public/uploads/${req.body.photo}`)
    next();
}