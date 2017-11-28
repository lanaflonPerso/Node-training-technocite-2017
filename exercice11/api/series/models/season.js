const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const seasonSchema = Schema({
    nid: {
        type: Number,
        required: "You must implement a nId for this serie",
        unique: true
    },
    year: {
        type: Number
    },
    episodes: []
});
module.exports = mongoose.model('Season', seasonSchema);