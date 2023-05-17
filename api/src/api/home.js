import { Router } from "express";

const route = Router();

export function homeRoute(app) {
    app.use('/', route);

    route.get('/', (req, res) => {
        return res.json('Home is where the fun is');
    });
}