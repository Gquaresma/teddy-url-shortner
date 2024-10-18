import { Migration } from '@mikro-orm/migrations';

export class Migration20241017220856 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table "Urls" add constraint "Urls_shortedUrl_unique" unique ("shortedUrl");`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "Urls" drop constraint "Urls_shortedUrl_unique";`);
  }

}
