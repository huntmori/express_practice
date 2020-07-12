"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Users_1 = require("./Users");
const router = express_1.Router();
router.use('/users', Users_1.default);
exports.default = router;
