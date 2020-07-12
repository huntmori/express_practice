"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const command_line_args_1 = require("command-line-args");
const options = command_line_args_1.default([
    {
        name: 'env',
        alias: 'e',
        defaultValue: 'development',
        type: String,
    },
]);
const result2 = dotenv_1.default.config({
    path: `./env/${options.env}.env`,
});
if (result2.error) {
    throw result2.error;
}
