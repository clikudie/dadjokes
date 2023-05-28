import Joi from 'joi';

export const addJokeValidation = Joi.object({
    content: Joi.string().required().min(1)
})