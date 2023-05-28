import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
dotenv.config();

export const appConfig = {
    port: process.env.PORT || 10,
    databaseURL: process.env.MONGODB_URI
}