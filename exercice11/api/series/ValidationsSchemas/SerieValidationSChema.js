const joi = require('joi');

module.exports = createSerieValidationSchema = joi.object({
    title: joi.string().min(5).max(20).required().label('il faut au moins 5 caractères'),
    resume: joi.string().min(5).max(200),
    photo: joi.string().min(5).max(255),
});