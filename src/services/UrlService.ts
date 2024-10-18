import { nanoid } from 'nanoid';
import UrlRepository from '../repositories/UrlRepository';
import Service from './Service';
import { BadRequestError } from '../errors/BadRequestError';
import { urlDto } from '../types/DTO/url';
import { NotFoundError } from '../errors/NotFoundError';

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

	async findOne(shortedUrl: string) {
		try {
			const result = await super.findOne(shortedUrl);

			if (!result || !result.originalUrl) {
				throw new NotFoundError('Url not found');
			}

			result.numberOfClicks += 1;
			await super.update(result, shortedUrl);

			return result.originalUrl;
		} catch (error: any) {
			throw new BadRequestError(error.message);
		}
	}
}

export default new UrlService(UrlRepository);
