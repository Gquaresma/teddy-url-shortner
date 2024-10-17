import IService from './services';
import { loginDto } from '../DTO/user';
import IValidator from './validators';

export interface IUserService extends IService {
	login: (_data: loginDto) => Promise<any>;
}

export interface IUserValidator extends IValidator {
	validateLogin: (_data: any) => Promise<loginDto>;
}
