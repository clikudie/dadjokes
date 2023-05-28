import mongoose from "mongoose";
import { appConfig } from "../config/index.js";

export async function connectDb() {
    try {
        const connection = await mongoose.connect(appConfig.databaseURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected on: ${connection.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}