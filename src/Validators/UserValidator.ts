import * as Schemas from './Schemas/userYUP';
import Validator from './Validator';
import { options } from '../helpers/validationOptions';
import { IAuthSchema } from '../types/interfaces/auth';

class UserValidator extends Validator {
	async validateLogin(data: Record<string, any>) {
		return (this.schemas as IAuthSchema).loginSchema.validate(data, options);
	}
}

export default new UserValidator(Schemas);
