const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const serieSchema = Schema({
    title: {
        type: String,
        required: "You must implement a title for this serie",
        unique: true
    },
    resume: {
        type: String
    },
    photo: {
        type: String
    },
    seasons: []
});
module.exports = mongoose.model('Serie', serieSchema);