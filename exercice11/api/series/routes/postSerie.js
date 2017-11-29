const mongoose = require('mongoose');
const Serie = mongoose.model('Serie');
const boom = require('boom')
const Joi = require('joi')
module.exports = {
    method: 'POST',
    path: '/api/series/',
    options: {
        validate: {
            payload: {
                title: Joi.string().min(8)
            },
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
