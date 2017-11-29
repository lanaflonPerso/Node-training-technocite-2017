const joi = require('joi');

module.exports = createSeasonValidationSchema = joi.object({
    nid: joi.number(),
    year: joi.number(),
});