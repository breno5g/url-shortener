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
exports.UrlRepository = void 0;
class UrlRepository {
    constructor(db) {
        this.db = db;
    }
    createUrl(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUrl = yield this.db.url.create({
                data: {
                    url
                }
            });
            return newUrl.id;
        });
    }
    findOneById(id) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const url = yield this.db.url.findUnique({
                where: {
                    id
                }
            });
            return (_a = url === null || url === void 0 ? void 0 : url.url) !== null && _a !== void 0 ? _a : null;
        });
    }
}
exports.UrlRepository = UrlRepository;
