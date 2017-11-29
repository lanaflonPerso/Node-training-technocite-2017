const test = "okokokok"
const mongoose = require('mongoose');
const Serie = mongoose.model('Serie');
module.exports = {
    method: 'GET',
    path: '/api/series/',
    handler: (req, h) => {
        return Serie.find({}).populate('seasons');
    }
}
