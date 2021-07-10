import dotenv from 'dotenv';

dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 80;

const DEFAULT_API_VERSION = process.env.DEFAULT_API_VERSION || 1;

const LOGGING_ENABLED = process.env.LOGGING_ENABLED || "true";

const JWT_PRIVATE_KEY = process.env.JWT_SECRET || "KEY_IS_MISSING";

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const ROUTES = {
    DEFAULT_API_VERSION: DEFAULT_API_VERSION
}

const LOGGING = {
    LOGGING_ENABLED: LOGGING_ENABLED
}

const KEYS = {
    JWT_PRIVATE_KEY: JWT_PRIVATE_KEY
}

const config = {
    server: SERVER,
    routes: ROUTES,
    logging: LOGGING,
    keys: KEYS
};


export default config;