import { Router } from "express";
import { jokesData } from "../loaders/jokesloader.js";

const route = Router();

export function jokesRoute(app) {
    app.use('/jokes', route);

    route.get('/', (req, res) => {
        if (jokesData.jokes) {
            const indexToChoose = Math.floor(Math.random() * jokesData.jokes.length);
            return res.json(jokesData.jokes[indexToChoose]);
        }

        return res.json('No jokes found');
    });
}