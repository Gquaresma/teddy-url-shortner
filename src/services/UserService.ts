// eslint-disable-next-line import/no-extraneous-dependencies
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Service from './Service';
import UserRepository from '../repositories/UserRepository';
import { loginDto } from '../types/DTO/user';
import { AuthError } from '../errors/AuthError';

class UserService extends Service {
	async save(data: Record<string, any>) {
		return super.save([{ ...data, password: bcrypt.hashSync(data.password, 10) }]);
	}

	async login(data: loginDto) {
		if (!process.env.JWT_SECRET) throw new Error('JWT_SECRET not found');

		try {
			const { password, ...payload } = await super.findOne({
				email: data.email,
			});

			if (!payload) throw new AuthError('Email ou senha inválidos');

			const user = {
				...payload,
			};

			delete user.id;
			delete user.password;

			const isMatch = bcrypt.compareSync(data.password, password);

			if (!isMatch) throw new AuthError('Email ou senha inválidos');

			return {
				user,
				token: jwt.sign(user, process.env.JWT_SECRET, {
					expiresIn: '1d',
				}),
			};
		} catch (error) {
			if (error instanceof AuthError) throw error;
			throw new AuthError('Email e/ou senha incorretos');
		}
	}
}

export default new UserService(UserRepository);
