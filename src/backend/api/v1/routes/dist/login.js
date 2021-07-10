"use strict";
exports.__esModule = true;
var express_1 = require("express");
var login_1 = require("../controllers/login");
var router = express_1["default"].Router();
router.get("/", login_1.login_get);
router.post("/", login_1.login_post);
exports["default"] = router;
