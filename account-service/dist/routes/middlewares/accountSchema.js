"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNewAccount = validateNewAccount;
const http_status_codes_1 = require("http-status-codes");
const addAccountschema_1 = require("../../models/schemas/addAccountschema");
function validateNewAccount(req, res, next) {
    const { error } = addAccountschema_1.addAccount.validate(req.body);
    if (error == null)
        return next();
    const { details } = error;
    const message = details.map(item => item.message).join(',');
    res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({ error: message }).end();
}
