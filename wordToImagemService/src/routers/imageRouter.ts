import { Router } from 'express';
import imageController from 'src/controllers/imageController';
//import validateAuthorization from '../../../account-service/src/routes/middlewares/validateAuthorizationMiddleware';

const router = Router();

//TODO: descobrir pq nao ta chamando o metodo
router.post('/insertOneImage', imageController.insertOneImage);


export default router;