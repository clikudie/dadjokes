import { Router } from "express";
import { homeRoute } from "./home.js";
import { jokesRoute } from "./joke.js";

export function routes() {
    const router = Router();
    homeRoute(router);
    jokesRoute(router);
    return router;
}