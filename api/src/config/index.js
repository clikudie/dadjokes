import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
console.log(process.env.NODE_ENV);

const envFound = dotenv.config();
if (envFound.error) {
    console.log(envFound.error);
    throw new Error('.env file not found');
}

export default {
    port: process.env.PORT || 10
}