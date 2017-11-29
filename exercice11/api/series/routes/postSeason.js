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
        },
        pre: [
            // (req, h) => { console.log(req.nid); return true }
        ]
        ,
    },
    handler: async (req, h) => {
        const season = await new Season(req.payload);
        try {
            // const serie = await Serie.findById(req.params.id);
            await season.save()
            // serie.seasons.push(season._id)
            // await serie.save()
            const serie = await Serie.findOneAndUpdate(
                { _id: req.params.id, "seasons.nid": { $nin: [season.nid] } },
                { $push: { seasons: season } },
                { new: true }
            );
            console.log(serie)
            return season;
        } catch (e) {
            console.log(e)
            return boom.badRequest(e)
        }

    }
}
