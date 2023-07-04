"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const url_route_1 = require("./url.route");
const routes = (0, express_1.Router)();
routes.use('/url', url_route_1.urlRouter);
exports.default = routes;
