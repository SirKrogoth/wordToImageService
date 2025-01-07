import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { addAccount } from '../../models/schemas/addAccountschema';

function validateNewAccount(req: Request, res: Response, next: any){
    const { error } = addAccount.validate(req.body);

    if(error == null) return next();

    const { details } = error;
    const message = details.map(item => item.message).join(',');

    res.status(StatusCodes.BAD_REQUEST).json({ error: message }).end();
}

export {
    validateNewAccount
}