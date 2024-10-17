import express, { Request, NextFunction } from 'express';
import UserController from '../controllers/UserController';

const router = express.Router();

router.post('/login', async (req: Request, _res, next: NextFunction) =>
	next(await UserController.login(req)),
);

export default router;
