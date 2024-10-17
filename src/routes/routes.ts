import { Router } from 'express';
import User from './user.routes';
import Middlewares from '../middlewares';
import Auth from './auth.routes';

const router = Router();

router.use(Auth);
router.use('/users', User);

router.use(Middlewares.dataHandler);

export default router;
