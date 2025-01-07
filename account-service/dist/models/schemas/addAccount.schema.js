"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAccount = void 0;
const joi_1 = __importDefault(require("joi"));
const addAccount = joi_1.default.object({
    user: joi_1.default.string()
        .min(6)
        .max(50)
        .required(),
    password: joi_1.default.string()
        .min(6)
        .max(255)
        .required(),
    status: joi_1.default.boolean()
        .default(true)
});
exports.addAccount = addAccount;
