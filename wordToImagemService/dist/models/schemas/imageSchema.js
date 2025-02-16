"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const imageSchema = joi_1.default.object({
    source: joi_1.default.string()
        .required(),
    date: joi_1.default.date()
        .required(),
    status: joi_1.default.boolean()
        .required()
        .default(true),
    alt: joi_1.default.string()
        .required()
        .default('Image')
});
exports.imageSchema = imageSchema;
