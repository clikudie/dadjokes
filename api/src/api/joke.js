import { Router } from "express";
import { JokeService } from "../services/joke.js";

const route = Router();

export function jokeRoute(app) {
    app.use('/jokes', route);

    route.post('/', async (req, res) => {
        const jokeService = new JokeService();
        const addResponse = await jokeService.addJoke(req.body);
        return res.send(addResponse);
    });

    route.get('/', async (req, res) => {
        const jokeService = new JokeService();
        const findResponse = await jokeService.getJoke();
        return res.send(findResponse);
    });
}