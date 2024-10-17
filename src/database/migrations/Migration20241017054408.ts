import { Migration } from '@mikro-orm/migrations';

export class Migration20241017054408 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table "Users" add constraint "Users_email_unique" unique ("email");`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "Users" drop constraint "Users_email_unique";`);
  }

}
