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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const imageRepository_1 = __importDefault(require("../models/repositories/imageRepository"));
function insertOneImage(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const image = req.body;
            const result = yield imageRepository_1.default.insertOneImage(image);
            if (!result) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).end();
                return;
            }
            res.status(http_status_codes_1.StatusCodes.CREATED).json(result).end();
        }
        catch (error) {
            console.error("Erro ao executar insertOneImage: " + error);
            res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(error).end();
        }
    });
}
exports.default = {
    insertOneImage
};
