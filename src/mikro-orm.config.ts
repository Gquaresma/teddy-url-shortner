import { EntityCaseNamingStrategy, Options } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import 'dotenv/config';
import lodash from 'lodash';

class CustomNamingStrategy extends EntityCaseNamingStrategy {
	joinColumnName(propertyName: string): string {
		return lodash.camelCase(propertyName);
	}

	joinKeyColumnName(entityName: string, referencedColumnName?: string): string {
		return lodash.camelCase(`${entityName}_${referencedColumnName}`);
	}

	joinTableName(sourceEntity: string, targetEntity: string): string {
		return `${sourceEntity}${targetEntity}`;
	}

	propertyToColumnName(propertyName: string): string {
		return lodash.camelCase(propertyName);
	}
}

const options: Options = {
	driver: PostgreSqlDriver,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	host: process.env.DB_HOST,
	dbName: process.env.DB_NAME,
	entities: ['./build/database/models'],
	entitiesTs: ['./src/database/models'],
	migrations: { path: './src/database/migrations', disableForeignKeys: false },
	namingStrategy: CustomNamingStrategy,
	allowGlobalContext: true,
	forceUtcTimezone: true,
};

export default options;
