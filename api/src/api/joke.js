import { Router } from "express";
import { JokeService } from "../services/joke.js";

const route = Router();

export function jokesRoute(app) {
    app.use('/jokes', route);

    route.get('/add', async (req, res) => {
        // Validate request body. Make sure accepted is not in request
        const jokeData = req.body;
        const jokeService = new JokeService();
        const addResponse = await jokeService.addJoke(jokeData);
        return res.send(addResponse);
    });

    route.get('/', async (req, res) => {
        const jokeService = new JokeService();
        const findResponse = await jokeService.getJoke();
        return res.send(findResponse);
    });
}