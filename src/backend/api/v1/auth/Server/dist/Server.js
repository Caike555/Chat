"use strict";
exports.__esModule = true;
var pg_1 = require("pg");
var client = new pg_1.Client();
client.connect();
exports["default"] = client;
