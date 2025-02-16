"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const imageController_1 = __importDefault(require("src/controllers/imageController"));
const validateAuthorizationMiddleware_1 = __importDefault(require("../../../account-service/src/routes/middlewares/validateAuthorizationMiddleware"));
const router = (0, express_1.Router)();
router.post('/insertOneImage', validateAuthorizationMiddleware_1.default, imageController_1.default.insertOneImage);
exports.default = router;
