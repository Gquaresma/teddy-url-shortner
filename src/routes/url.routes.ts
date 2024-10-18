import express, { Request, NextFunction } from 'express';
import UrlController from '../controllers/UrlController';

const router = express.Router();

router.post('/', async (req: Request, _res, next: NextFunction) =>
	next(await UrlController.generateShortUrl(req)),
);

export default router;
