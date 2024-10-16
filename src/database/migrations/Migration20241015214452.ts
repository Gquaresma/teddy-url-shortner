import { Migration } from '@mikro-orm/migrations';

export class Migration20241015214452 extends Migration {
	override async up(): Promise<void> {
		this.addSql(
			`create table "Users" ("id" varchar(255) not null, "name" varchar(255) not null, "email" varchar(255) not null, "password" varchar(255) not null, "createdAt" timestamptz not null default now(), "updatedAt" timestamptz not null default now(), constraint "Users_pkey" primary key ("id"));`,
		);
	}
}
