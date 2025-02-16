"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const fs_1 = __importDefault(require("fs"));
const privateKey = fs_1.default.readFileSync('./keys/private.key', 'utf-8');
const publicKey = fs_1.default.readFileSync('./keys/public.key', 'utf-8');
const jwtExpires = parseInt(`${process.env.JWT_EXPIRES}`) || 500;
const jwtAlgorithm = 'RS256';
function verify(token) {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, publicKey, {
            algorithms: [jwtAlgorithm]
        });
        return {
            _id: decoded === null || decoded === void 0 ? void 0 : decoded._id
        };
    }
    catch (error) {
        console.error(`Houve um erro no Verify: ${error}`);
        return null;
    }
}
function sign(_id) {
    const token = { _id };
    try {
        return jsonwebtoken_1.default.sign(token, privateKey, {
            expiresIn: jwtExpires,
            algorithm: jwtAlgorithm
        });
    }
    catch (error) {
        console.error("Erro ao assinar o token:", error);
        throw error; // Lançando erro para ser tratado fora da função
    }
}
exports.default = {
    sign,
    verify
};
