import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes'; 
import imageRepository from '../models/repositories/imageRepository';
import iImage from 'src/models/interfaces/iImage';

async function insertOneImage(req: Request, res: Response, next: any){
    try {
        const image = req.body as iImage;

        const result = await imageRepository.insertOneImage(image);

        if(!result){
            res.status(StatusCodes.BAD_REQUEST).end();
            return;
        }

        res.status(StatusCodes.CREATED).json(result).end();

    } catch (error) {
        console.error("Erro ao executar insertOneImage: " + error);
        res.status(StatusCodes.BAD_REQUEST).json(error).end();
    }
}

export default {
    insertOneImage
}