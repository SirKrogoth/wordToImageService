"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const imageController_1 = __importDefault(require("src/controllers/imageController"));
//import validateAuthorization from '../../../account-service/src/routes/middlewares/validateAuthorizationMiddleware';
const router = (0, express_1.Router)();
//TODO: descobrir pq nao ta chamando o metodo
router.post('/insertOneImage', imageController_1.default.insertOneImage);
exports.default = router;
