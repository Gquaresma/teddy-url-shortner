// eslint-disable-next-line import/no-extraneous-dependencies
import bcrypt from 'bcrypt';
import Service from './Service';
import UserRepository from '../repositories/UserRepository';

class UserService extends Service {
	async save(data: Record<string, any>) {
		return super.save([{ ...data, password: bcrypt.hashSync(data.password, 10) }]);
	}
}

export default new UserService(UserRepository);
