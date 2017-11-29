const mongoose = require('mongoose');
const Serie = mongoose.model('Serie');
const boom = require('boom')
const validation = require('../ValidationsSchemas/SerieValidationSChema');
module.exports = {
    method: 'POST',
    path: '/api/series/',
    options: {
        validate: {
            payload: validation,
            failAction: (request, h, err) => err
        }
    },
    handler: async (req, h) => {
        console.log("heheheeh")
        try {
            const serie = await new Serie(req.payload);
            serie.save()
            return serie;
        } catch (e) {
            boom.badRequest(e)
        }
    }
}
