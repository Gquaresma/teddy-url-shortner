import Repository from './Repository';
import { Users } from '../database/models/Users';
import Database from '../database/connection';

class UserRepository extends Repository {}

export default new UserRepository(Database.getConnection(), Users.name);
