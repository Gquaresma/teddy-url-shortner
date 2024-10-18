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
			const shortedUrl = await this.service.save({ ...req.body, userId });
			const completeUrl = `${req.protocol}://${req.get('host')}/${shortedUrl}`;

			return success({ shortedUrl: completeUrl });
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

	async remove(req: Request) {
		try {
			const { shortedUrl } = req.body;
			const validate = await this.validator.validateGetOne({ shortedUrl });

			await this.service.remove(validate);

			return success({ message: 'Url deleted successfully' });
		} catch (error: any) {
			return badRequest(error.message);
		}
	}
}

export default new UrlController(UrlService, Validator);
