import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { generateId } from '../../helpers/generalUtils';

@Entity()
export class Users {
	@PrimaryKey()
	id: string = generateId();

	@Property()
	name!: string;

	@Property({ unique: true })
	email!: string;

	@Property()
	password!: string;

	@Property({ defaultRaw: 'now()' })
	createdAt!: Date;

	@Property({ defaultRaw: 'now()' })
	updatedAt!: Date;
}
