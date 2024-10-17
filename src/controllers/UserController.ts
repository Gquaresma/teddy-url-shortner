import { Request } from 'express';
import Validator from '../Validators/UserValidator';
import UserService from '../services/UserService';
import Controller from './Controller';
import { IUserService, IUserValidator } from '../types/interfaces/user';
import { success } from '../helpers/httpResponses';
import { errorResponse } from '../helpers/errorResponse';

class UserController extends Controller {
	async login({ body }: Request) {
		try {
			return success(
				await (this.service as IUserService).login(
					await (this.validator as IUserValidator).validateLogin(body),
				),
			);
		} catch (error) {
			return errorResponse(error);
		}
	}
}

export default new UserController(UserService, Validator);
