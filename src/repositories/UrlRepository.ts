import Repository from './Repository';
import { Urls } from '../database/models/Url';
import Database from '../database/connection';

class UrlRepository extends Repository {}

export default new UrlRepository(Database.getConnection(), Urls.name);
