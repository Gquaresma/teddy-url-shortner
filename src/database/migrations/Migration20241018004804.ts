import { Migration } from '@mikro-orm/migrations';

export class Migration20241018004804 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table "Urls" alter column "deletedAt" type timestamptz using ("deletedAt"::timestamptz);`);
    this.addSql(`alter table "Urls" alter column "deletedAt" drop not null;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "Urls" alter column "deletedAt" type timestamptz using ("deletedAt"::timestamptz);`);
    this.addSql(`alter table "Urls" alter column "deletedAt" set not null;`);
  }

}
