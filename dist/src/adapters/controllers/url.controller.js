"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlController = void 0;
class UrlController {
    constructor(service) {
        this.service = service;
        this.createUrl = this.createUrl.bind(this);
        this.findOneById = this.findOneById.bind(this);
    }
    createUrl(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { url } = req.body;
                const newUrl = yield this.service.createUrl(url);
                res.status(201).send({ url: `https://url-shortener-9zlu.onrender.com/url/${newUrl}` });
            }
            catch (error) {
                next(error);
            }
        });
    }
    findOneById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const url = yield this.service.findOneById(id);
                res.redirect(url);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.UrlController = UrlController;
