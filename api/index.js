import express from 'express';
import { load } from './src/loaders/index.js';
import { appConfig } from './src/config/index.js';

async function startServer() {
    const app = express();
    await load(app);

    app.listen(appConfig.port, () => {
        console.log(`Server is up and running running on port: ${appConfig.port}`);
    }).on('error', err => {
        process.exit(1);
    })
}

startServer();