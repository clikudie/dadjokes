import { expressLoader } from "./express.js";
import { loadJokes } from "./jokesloader.js";

export async function load(app) {
    expressLoader(app);
    await loadJokes();
}