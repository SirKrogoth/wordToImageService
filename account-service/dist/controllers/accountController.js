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
const accountRepository_1 = __importDefault(require("../models/repositories/accountRepository"));
const autentication_1 = require("../secures/autentication");
function insertOneAccount(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const account = req.body;
            account.password = yield (0, autentication_1.hashPassword)(account.password);
            const result = yield accountRepository_1.default.insertOneAccount(account);
            if (!result) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).end();
                return;
            }
            res.status(http_status_codes_1.StatusCodes.CREATED).json(result).end();
        }
        catch (error) {
            console.error("Erro ao executar insertOneAccount: " + error);
            res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(error).end();
        }
    });
}
function compareAccountPassword(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const account = req.body;
            const result = yield accountRepository_1.default.findByUser(account.user);
            if (!result) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).end();
                return;
            }
            const isValid = yield (0, autentication_1.comparePassword)(account.password, result.password);
            if (!isValid) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).end();
                return;
            }
            else {
                res.status(http_status_codes_1.StatusCodes.OK).json(result).end();
                console.log("Senha correta");
            }
        }
        catch (error) {
            console.error("Erro ao executar compareAccountPassword: " + error);
            res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(error).end();
        }
    });
}
exports.default = {
    insertOneAccount,
    compareAccountPassword
};
