"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("src/external/envConfig");
const app_1 = require("./app");
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3001;
app_1.app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
