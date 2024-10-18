import { Request } from 'express';
import Validator from '../Validators/UrlValidator';
import UrlService from '../services/UrlService';
import { badRequest, success } from '../helpers/httpResponses';
import { getUserIdFromToken } from '../helpers/token';
import Controller from './Controller';

class UrlController extends Controller {
	async generateShortUrl(req: Request) {
		try {
			const userId = getUserIdFromToken(req);

			const validate = await this.validator.validatePost(req.body);

			const shortedUrl = await this.service.save({ ...validate, userId });
			const completeUrl = `${req.protocol}://${req.get('host')}/${shortedUrl}`;

			return success({ shortedUrl: completeUrl });
		} catch (error: any) {
			return badRequest(error.message);
		}
	}

	// async redirectToOriginalUrl(req: Request) {
	// 	try {
	// 		const { shortUrl } = req.params;
	// 		const originalUrl = await this.service.findByShortUrl(shortUrl);

	// 		return success({ originalUrl });
	// 	} catch (error: any) {
	// 		return badRequest(error.message);
	// 	}
	// }
}

export default new UrlController(UrlService, Validator);
