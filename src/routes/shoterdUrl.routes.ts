import express, { Request, NextFunction } from 'express';
import UrlController from '../controllers/UrlController';

const router = express.Router();

router.post('/', async (req: Request, _res, next: NextFunction) =>
	next(await UrlController.generateShortUrl(req)),
);

router.get('/', async (req: Request, _res, next: NextFunction) => {
	next(await UrlController.findAll(req));
});

export default router;
