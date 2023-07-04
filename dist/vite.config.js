"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vite_1 = require("vite");
exports.default = (0, vite_1.defineConfig)({
    test: {
        exclude: [
            'node_modules'
        ],
        passWithNoTests: true,
        allowOnly: true
    }
});
