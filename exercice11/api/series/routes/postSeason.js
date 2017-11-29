const mongoose = require('mongoose');
const Season = mongoose.model('Season');
const Serie = mongoose.model('Serie');
const boom = require('boom')
const validation = require('../ValidationsSchemas/SeasonValidationSChema');
module.exports = {
    method: 'POST',
    path: '/api/series/{id}/seasons/',
    options: {
        validate: {
            payload: validation,
            failAction: (request, h, err) => err
        }
    },
    handler: async (req, h) => {
        const season = await new Season(req.payload);
        try {
            const serie = await Serie.findById(req.params.id);
            await season.save()
            serie.seasons.push(season._id)
            await serie.save()
            return season;
        } catch (e) {
            console.log(e)
            return boom.badRequest(e)
        }

    }
}
