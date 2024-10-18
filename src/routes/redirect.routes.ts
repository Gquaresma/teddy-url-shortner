import express, { Request, Response, NextFunction } from 'express';
import UrlController from '../controllers/UrlController';

const redirectRouter = express.Router();

redirectRouter.get('/:shortedUrl', async (req: Request, res: Response, next: NextFunction) => {
	try {
		const result = await UrlController.redirectToOriginalUrl(req);
		if (result.statusCode === 200 && result.body.originalUrl) {
			res.redirect(result.body.originalUrl);
		} else {
			res.status(result.statusCode).json(result.body);
		}
	} catch (error) {
		next(error);
	}
});

export default redirectRouter;
