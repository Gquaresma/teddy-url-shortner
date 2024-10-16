import { Router } from 'express';
import User from './user.routes';
import Middlewares from '../middlewares';

const router = Router();

router.use('/users', User);

router.use(Middlewares.dataHandler);

export default router;
