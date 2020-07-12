"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = require("cookie-parser");
const morgan_1 = require("morgan");
const path_1 = require("path");
const helmet_1 = require("helmet");
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
require("express-async-errors");
const routes_1 = require("./routes");
const Logger_1 = require("@shared/Logger");
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cookie_parser_1.default());
if (process.env.NODE_ENV === 'development') {
    app.use(morgan_1.default('dev'));
}
if (process.env.NODE_ENV === 'production') {
    app.use(helmet_1.default());
}
app.use('/api', routes_1.default);
app.use((err, req, res, next) => {
    Logger_1.default.error(err.message, err);
    return res.status(http_status_codes_1.BAD_REQUEST).json({
        error: err.message,
    });
});
const viewsDir = path_1.default.join(__dirname, 'views');
app.set('views', viewsDir);
const staticDir = path_1.default.join(__dirname, 'public');
app.use(express_1.default.static(staticDir));
app.get('*', (req, res) => {
    res.sendFile('index.html', { root: viewsDir });
});
exports.default = app;
