import { Entity, ManyToOne, PrimaryKey, Property, Cascade } from '@mikro-orm/core';
import { generateId } from '../../helpers/generalUtils';
import { Users } from './Users';

@Entity()
export class Urls {
	@PrimaryKey()
	id: string = generateId();

	@Property()
	originalUrl!: string;

	@Property({ unique: true })
	shortedUrl!: string;

	@Property()
	numberOfClicks!: number;

	@Property({ nullable: true })
	deletedAt!: Date;

	@Property({ defaultRaw: 'now()' })
	createdAt!: Date;

	@Property({ defaultRaw: 'now()' })
	updatedAt!: Date;

	@ManyToOne(() => Users, { cascade: [Cascade.REMOVE] })
	user!: Users;
}
