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

			const validate = await this.validator.validatePost({
				...req.body,
				protocol: req.protocol,
				host: req.get('host'),
			});

			const shortedUrl = await this.service.save({ ...validate, userId });

			return success({ shortedUrl });
		} catch (error: any) {
			return badRequest(error.message);
		}
	}

	async redirectToOriginalUrl(req: Request) {
		try {
			const { shortedUrl } = req.params;

			const validate = await this.validator.validateGetOne({ shortedUrl });
			const originalUrl = await this.service.findOne(validate);

			return success({ originalUrl });
		} catch (error: any) {
			return badRequest(error.message);
		}
	}

	async findAll(req: Request) {
		try {
			const userId = getUserIdFromToken(req);
			const validate = await this.validator.validateGet({ userId });
			const data = await this.service.findAll(validate);

			return success(data);
		} catch (error: any) {
			return badRequest(error.message);
		}
	}
}

export default new UrlController(UrlService, Validator);
