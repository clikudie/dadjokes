import { expressLoader } from "./express.js";
import { connectDb } from "./mongoose.js";

export async function executeLoaders(app) {
    await connectDb();
    expressLoader(app);
}