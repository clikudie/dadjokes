import { JokeModel } from "../models/joke.js";

export class JokeService {
    constructor() { }

    async addJoke(jokeData) {
        try {
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
            const count = await JokeModel.estimatedDocumentCount();
            var random = Math.floor(Math.random() * count);
            const res = await JokeModel.findOne().skip(random).exec();
            return {
                success: true,
                message: res.content
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