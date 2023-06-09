import { JokeModel } from "../models/joke.js";
import { addJokeValidation } from '../validators/schema-validator.js';

export class JokeService {
    constructor() { }

    async addJoke(jokeData) {
        try {
            const { error } = addJokeValidation.validate(jokeData);
            if (error) {
                return {
                    success: false,
                    error: error.message
                }
            }

            // make sure accepted is set to false
            jokeData.accepted = false;
            const createdTask = await JokeModel.create(jokeData);
            if (!createdTask) {
                return {
                    success: false,
                    message: 'Joke creation failed',
                    error: 'Unable to add joke'
                }
            }

            return {
                success: true,
                message: 'Joke added succesfully'
            };
        } catch (err) {
            console.log(err);
            return {
                success: false,
                message: 'Internal server error'
            }
        }
    }

    async getJoke() {
        try {
            const res = await JokeModel.aggregate([
                { $match: { accepted: true } },
                { $sample: { size: 1 } }
            ]);

            if (!res || !Array.isArray(res) || res.length === 0) {
                return {
                    success: false,
                    error: 'No jokes found'
                }
            }

            return {
                success: true,
                data: {
                    setup: res[0].setup,
                    punchline: res[0].punchline,
                },
                message: 'Joke found'
            }
        } catch (err) {
            console.log(err);
            return {
                success: false,
                message: 'Internal server error'
            }
        }
    }
}