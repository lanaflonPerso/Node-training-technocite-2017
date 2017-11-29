const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongodbErrorHandler = require("mongoose-mongodb-errors")
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
    seasons: [{
        type: Schema.ObjectId,
        ref: 'Season'
    }
    ]
});
// serieSchema.plugin(mongodbErrorHandler)
module.exports = mongoose.model('Serie', serieSchema);