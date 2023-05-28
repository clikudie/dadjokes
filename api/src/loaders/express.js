import express from 'express';
import cors from 'cors';
import { routes } from '../api/index.js';

export function expressLoader(app) {
    app.use(cors());
    app.use(express.json());
    app.use(routes());

    // Not found and Error Routes
    app.use((_req, _res, next) => {
        const err = new Error('Not Found');
        err['status'] = 404;
        next(err);
    });

    app.use((err, _req, res, _next) => {
        res.status(err.status || 500);
        res.json({
            errors: {
                message: err.message,
            },
        });
    });
}