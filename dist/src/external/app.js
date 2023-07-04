"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const errorHandler_middleware_1 = __importDefault(require("@middlewares/errorHandler.middleware"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
exports.app = app;
app.disable('x-powered-by');
const options = {
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token'],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: '*',
    preflightContinue: true
};
app.use(express_1.default.json());
app.use((0, cors_1.default)(options));
app.use(routes_1.default);
app.use(errorHandler_middleware_1.default);
app.get('/', (_req, res) => {
    res.send({ message: 'API' });
});
