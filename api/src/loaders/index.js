import { expressLoader } from "./express.js";
import { connectDb } from "./mongoose.js";

export async function load(app) {
    await connectDb();
    expressLoader(app);
}