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

			if (!result || !result.originalUrl || result.deletedAt !== null) {
				throw new NotFoundError('Url not found');
			}
			result.userId = result.user.id;
			delete result.user;
			result.numberOfClicks += 1;
			await super.update(result, shortedUrl);

			console.log(result.originalUrl);
			return result.originalUrl;
		} catch (error: any) {
			throw new BadRequestError(error.message);
		}
	}

	async findAll(userId: string) {
		try {
			const result = await super.findAll(userId);

			if (!result) {
				throw new NotFoundError('User URLs not found');
			}

			const filteredResult = result.filter((item: any) => item.deletedAt === null);

			if (filteredResult.length === 0) {
				throw new NotFoundError('User URLs not found');
			}

			return filteredResult;
		} catch (error: any) {
			throw new BadRequestError(error.message);
		}
	}

	async remove(shortedUrl: string) {
		try {
			const result = await super.findOne(shortedUrl);

			result.deletedAt = new Date();
			result.userId = result.user.id;
			delete result.user;

			await super.update(result, shortedUrl);

			return { message: 'Url deleted successfully' };
		} catch (error: any) {
			throw new BadRequestError(error.message);
		}
	}
}

export default new UrlService(UrlRepository);
