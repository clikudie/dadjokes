import express from 'express';
import { load } from './src/loaders/index.js';
import config from './src/config/index.js';

async function startServer() {
    const app = express();
    await load(app);

    app.listen(config.port, () => {
        console.log(`Server is up and running running on port: ${config.port}`);
    }).on('error', err => {
        process.exit(1);
    })
}

startServer();