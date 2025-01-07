import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import iAccount from '../models/interfaces/iAccount';
import iAccountCompare from '../models/interfaces/iAccountCompare';
import accountRepository from '../models/repositories/accountRepository';
import { hashPassword, comparePassword } from '../secures/autentication';

async function insertOneAccount(req: Request, res: Response, next: any){
    try {
        const account = req.body as iAccount;

        account.password = await hashPassword(account.password);

        const result = await accountRepository.insertOneAccount(account);

        if(!result){
            res.status(StatusCodes.BAD_REQUEST).end();
            return;
        } 

        res.status(StatusCodes.CREATED).json(result).end();

    } catch (error) {
        console.error("Erro ao executar insertOneAccount: " + error);
        res.status(StatusCodes.BAD_REQUEST).json(error).end();
    }
}

async function compareAccountPassword(req: Request, res: Response, next: any){
    try {
        const account = req.body as iAccountCompare;

        const result = await accountRepository.findByUser(account.user);

        if(!result){
            res.status(StatusCodes.BAD_REQUEST).end();
            return;
        }

        const isValid = await comparePassword(account.password, result.password);

        if(!isValid){
            res.status(StatusCodes.BAD_REQUEST).end();
            return;
        } else{
            res.status(StatusCodes.OK).json(result).end();
            console.log("Senha correta");
        }        
        
    } catch (error) {
        console.error("Erro ao executar compareAccountPassword: " + error);
        res.status(StatusCodes.BAD_REQUEST).json(error).end();
    }
}

export default {
    insertOneAccount,
    compareAccountPassword
}