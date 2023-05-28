import mongoose, { model } from "mongoose";

const Joke = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    accepted: {
        type: Boolean,
        required: true,
        default: false
    },
},
    { timestamps: true });

export const JokeModel = model('Joke', Joke);