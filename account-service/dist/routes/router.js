"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const accountController_1 = __importDefault(require("../controllers/accountController"));
const accountSchema_1 = require("./middlewares/accountSchema");
const router = (0, express_1.Router)();
router.post('/insertOneAccount', accountSchema_1.validateNewAccount, accountController_1.default.insertOneAccount);
router.get('/findByUser', accountController_1.default.compareAccountPassword);
exports.default = router;
