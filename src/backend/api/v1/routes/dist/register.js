"use strict";
exports.__esModule = true;
var express_1 = require("express");
var register_1 = require("../controllers/register");
var router = express_1["default"].Router();
router.get("/", register_1.register_get);
router.post("/", register_1.register_post);
exports["default"] = router;
