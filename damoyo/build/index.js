"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./LoadEnv");
const _server_1 = require("@server");
const Logger_1 = require("@shared/Logger");
const port = Number(process.env.PORT || 3000);
_server_1.default.listen(port, () => {
    Logger_1.default.info('Express server started on port: ' + port);
});
