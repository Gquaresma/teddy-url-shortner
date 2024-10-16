import { EntityManager } from '@mikro-orm/core';
import { handleError } from '../helpers/handleError';
import IRepository from '../types/interfaces/repository';
import { NotFoundError } from '../errors/NotFoundError';
import { generateId } from '../helpers/generalUtils';

abstract class Repository implements IRepository {
	protected connection: Promise<EntityManager>;

	protected entityName: string;

	constructor(connection: Promise<EntityManager>, entityName: string) {
		this.connection = connection;
		this.entityName = entityName;
	}

	async findMany(
		condition = {},
		fields: any[] = ['*'],
		options: any = { orderBy: { createdAt: 'DESC' } },
	) {
		try {
			return await (
				await this.connection
			).find(this.entityName, condition, {
				...options,
				fields,
				refresh: true,
				disableIdentityMap: true,
			});
		} catch (error) {
			return handleError(error);
		}
	}

	async findUnique(condition = {}, fields: any[] = ['*']) {
		try {
			return await (
				await this.connection
			).findOneOrFail(this.entityName, condition, {
				fields,
				refresh: true,
				disableIdentityMap: true,
				failHandler: (entityName: string) => new NotFoundError(entityName),
			});
		} catch (error) {
			return handleError(error);
		}
	}

	async create(data: any[]) {
		try {
			const connection = await this.connection;

			const objects = data.map((item: any) => ({
				...item,
				id: generateId(),
				createdAt: new Date(),
				updatedAt: new Date(),
			}));

			await connection.transactional(async em => em.insertMany(this.entityName, objects));

			return objects;
		} catch (error) {
			return handleError(error);
		}
	}

	async update({ id, ...data }: any, condition = {}) {
		try {
			const count = await (
				await this.connection
			).nativeUpdate(this.entityName, { id, ...condition }, JSON.parse(JSON.stringify(data)));

			if (count === 0) throw new NotFoundError();
			return { count };
		} catch (error) {
			return handleError(error);
		}
	}

	async delete({ id }: any, condition = {}) {
		try {
			const count = await (
				await this.connection
			).nativeDelete(this.entityName, { id, ...condition });

			if (count === 0) throw new NotFoundError();
			return { count };
		} catch (error) {
			return handleError(error);
		}
	}
}

export default Repository;
