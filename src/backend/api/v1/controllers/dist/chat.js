"use strict";
exports.__esModule = true;
var logging_1 = require("../../../config/logging");
var Page = 'chat';
var NAMESPACE = Page + " Controller";
var chat = function (req, res, next) {
    logging_1["default"].Log(NAMESPACE, "{GET} " + Page + " page requested by: " + req.ip, 0);
    return res.render("" + Page, { layout: 'main' });
};
exports["default"] = chat;
