import { Router } from 'express';
import accountController from '../controllers/accountController';
import { validateNewAccount } from './middlewares/accountSchema';

const router = Router();

router.post('/insertOneAccount', validateNewAccount, accountController.insertOneAccount);
router.get('/findByUser', accountController.compareAccountPassword);

export default router;