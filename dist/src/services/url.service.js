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
exports.UrlService = void 0;
class UrlService {
    constructor(urlRepository) {
        this.repository = urlRepository;
    }
    createUrl(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUrl = yield this.repository.createUrl(url);
            return newUrl;
        });
    }
    findOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = yield this.repository.findOneById(id);
            return url;
        });
    }
}
exports.UrlService = UrlService;
