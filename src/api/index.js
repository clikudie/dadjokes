import { Router } from "express";
import { jokesRoute } from "./jokes.js";

export function routes() {
    const router = Router();
    jokesRoute(router);
    return router;
}