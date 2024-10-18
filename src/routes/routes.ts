import { Router } from 'express';
import User from './user.routes';
import Middlewares from '../middlewares';
import Auth from './auth.routes';
import Url from './url.routes';

const router = Router();

router.use(Auth);
router.use('/users', User);
router.use('/shorten-url', Url);

router.use(Middlewares.Auth);
router.use(Middlewares.dataHandler);

export default router;
