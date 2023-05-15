import express from 'express';
import config from './src/config/index.js';
import { load } from './src/loaders/index.js';

async function startServer() {
    const app = express();
    await load(app);

    app.listen(config.port, () => {
        console.log(`Server listening on port ${config.port}`);
    }).on('error', err => {
        process.exit(1);
    })
}

startServer();