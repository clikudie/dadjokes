import { Router } from "express";
import { homeRoute } from "./home.js";
import { jokeRoute } from "./joke.js";

export function routes() {
    const router = Router();
    homeRoute(router);
    jokeRoute(router);
    return router;
}