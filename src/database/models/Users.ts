import { Entity, PrimaryKey, Property, OneToMany, Collection } from '@mikro-orm/core';
import { generateId } from '../../helpers/generalUtils';
import { Urls } from './Url';

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

	@OneToMany(() => Urls, url => url.user, { orphanRemoval: true })
	url = new Collection<Urls>(this);
}
