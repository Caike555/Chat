"use strict";
exports.__esModule = true;
var dotenv_1 = require("dotenv");
dotenv_1["default"].config();
var SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
var SERVER_PORT = process.env.SERVER_PORT || 80;
var DEFAULT_API_VERSION = process.env.DEFAULT_API_VERSION || 1;
var LOGGING_ENABLED = process.env.LOGGING_ENABLED || "true";
var JWT_PRIVATE_KEY = process.env.JWT_SECRET || "KEY_IS_MISSING";
var SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};
var ROUTES = {
    DEFAULT_API_VERSION: DEFAULT_API_VERSION
};
var LOGGING = {
    LOGGING_ENABLED: LOGGING_ENABLED
};
var KEYS = {
    JWT_PRIVATE_KEY: JWT_PRIVATE_KEY
};
var config = {
    server: SERVER,
    routes: ROUTES,
    logging: LOGGING,
    keys: KEYS
};
exports["default"] = config;
