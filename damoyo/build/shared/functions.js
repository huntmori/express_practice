"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomInt = exports.pErr = void 0;
const Logger_1 = require("./Logger");
exports.pErr = (err) => {
    if (err) {
        Logger_1.default.error(err);
    }
};
exports.getRandomInt = () => {
    return Math.floor(Math.random() * 1000000000000);
};
