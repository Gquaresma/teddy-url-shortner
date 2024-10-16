import { EntityManager, MikroORM } from '@mikro-orm/core';
import options from '../mikro-orm.config';

class Database {
	private connection: Promise<MikroORM>;

	constructor() {
		this.connection = MikroORM.init(options);
	}

	public async getConnection(): Promise<EntityManager> {
		return (await this.connection)?.em;
	}
}

export default new Database();
