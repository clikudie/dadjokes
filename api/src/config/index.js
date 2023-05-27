import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
dotenv.config();

export default {
    port: process.env.PORT || 10
}