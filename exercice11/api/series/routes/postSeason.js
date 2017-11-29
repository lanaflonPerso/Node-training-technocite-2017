const mongoose = require('mongoose');
const Season = mongoose.model('Season');
const boom = require('boom')
const validation = require('../ValidationsSchemas/SeasonValidationSChema');
module.exports = {
    method: 'POST',
    path: '/api/series/seasons/',
    options: {
        validate: {
            payload: validation,
            failAction: (request, h, err) => err
        }
    },
    handler: async (req, h) => {
        const season = await new Season(req.payload);
        try {
            await season.save()
        } catch (e) {
            console.log(e)
            return boom.badRequest(e)
        }
        return season;
    }
}
