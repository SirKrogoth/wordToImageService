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
const authorization_1 = __importDefault(require("../../secures/authorization"));
function validateAuthorization(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const token = req.headers['x-access-token'];
            if (!token) {
                res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).end();
                return; // Garante que o fluxo termina aqui
            }
            const payload = yield authorization_1.default.verify(token);
            if (!payload) {
                res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).end();
                return; // Garante que o fluxo termina aqui
            }
            res.locals.payload = payload; // Armazena o payload decodificado
            next(); // Continua para o próximo middleware
        }
        catch (error) {
            console.error(`validateAuthorization: ${error}`);
            res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).end();
        }
    });
}
exports.default = validateAuthorization;
