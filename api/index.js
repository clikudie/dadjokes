import express from 'express';
import { load } from './src/loaders/index.js';

async function startServer() {
    const app = express();
    await load(app);

    const port = process.env.PORT || 3000;

    app.listen(port, () => {
        console.log(`Server is up and running running on port: ${port}`);
    }).on('error', err => {
        process.exit(1);
    })
}

startServer();