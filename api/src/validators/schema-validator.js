import Joi from 'joi';

export const addJokeValidation = Joi.object({
    setup: Joi.string().required().min(1)
})