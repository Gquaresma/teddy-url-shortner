import express, { Request, NextFunction } from 'express';
import UrlController from '../controllers/UrlController';

const router = express.Router();

router.get('/', async (req: Request, _res, next: NextFunction) => {
	next(await UrlController.findAll(req));
});

export default router;
