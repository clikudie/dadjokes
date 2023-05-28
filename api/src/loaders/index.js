import { expressLoader } from "./express.js";
import { connectDb } from "./mongoose.js";

export async function load(app) {
    console.log('Process env: ', process.env)
    await connectDb();
    expressLoader(app);
}