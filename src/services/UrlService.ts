import { nanoid } from 'nanoid';
import UrlRepository from '../repositories/UrlRepository';
import Service from './Service';
import { BadRequestError } from '../errors/BadRequestError';
import { urlDto } from '../types/DTO/url';

class UrlService extends Service {
	async save(data: urlDto) {
		try {
			const shortUrl = nanoid(6);
			const urlData = {
				originalUrl: data.url,
				shortedUrl: shortUrl,
				numberOfClicks: 0,
				userId: data.userId || null,
			};

			await super.save([urlData]);

			return shortUrl;
		} catch (error: any) {
			throw new BadRequestError(error.message);
		}
	}
}

export default new UrlService(UrlRepository);
