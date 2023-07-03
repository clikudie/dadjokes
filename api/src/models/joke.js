import mongoose, { model } from "mongoose";

const Joke = new mongoose.Schema({
    setup: {
        type: String,
        required: true,
    },
    punchline: {
        type: String,
        required: false,
    },
    accepted: {
        type: Boolean,
        required: true,
        default: false
    },
},
    { timestamps: true });

export const JokeModel = model('Joke', Joke);