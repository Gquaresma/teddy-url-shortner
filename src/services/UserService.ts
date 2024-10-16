import Service from './Service';
import UserRepository from '../repositories/UserRepository';

class UserService extends Service {}

export default new UserService(UserRepository);
