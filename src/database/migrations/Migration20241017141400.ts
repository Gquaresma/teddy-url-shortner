import { Migration } from '@mikro-orm/migrations';

export class Migration20241017141400 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "Urls" ("id" varchar(255) not null, "originalUrl" varchar(255) not null, "shortedUrl" varchar(255) not null, "numberOfClicks" int not null, "deletedAt" timestamptz not null, "createdAt" timestamptz not null default now(), "updatedAt" timestamptz not null default now(), "userId" varchar(255) null, constraint "Urls_pkey" primary key ("id"));`);

    this.addSql(`alter table "Urls" add constraint "Urls_userId_foreign" foreign key ("userId") references "Users" ("id") on delete cascade;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "Urls" cascade;`);
  }

}
