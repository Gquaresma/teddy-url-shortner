import { Request } from 'express';
import { errorResponse } from '../helpers/errorResponse';
import { success } from '../helpers/httpResponses';
import IController from '../types/interfaces/controllers';
import IService from '../types/interfaces/services';
import IValidator from '../types/interfaces/validators';

abstract class Controller implements IController {
	protected service: IService;

	protected validator: IValidator;

	constructor(service: IService, validator: IValidator) {
		this.service = service;
		this.validator = validator;
	}

	async findAll({ query }: Request) {
		try {
			return success(await this.service.findAll(await this.validator.validateGet({ ...query })));
		} catch (error) {
			return errorResponse(error);
		}
	}

	async findOne({ params }: Request) {
		try {
			return success(
				await this.service.findOne(await this.validator.validateGetOne({ ...params })),
			);
		} catch (error) {
			return errorResponse(error);
		}
	}

	async save({ body }: Request) {
		try {
			return success(await this.service.save(await this.validator.validatePost(body)));
		} catch (error) {
			return errorResponse(error);
		}
	}

	async update({ body, params }: Request) {
		try {
			return success(
				await this.service.update(await this.validator.validatePut({ ...body, ...params })),
			);
		} catch (error) {
			return errorResponse(error);
		}
	}

	async remove({ params }: Request) {
		try {
			return success(await this.service.remove(await this.validator.validateGetOne({ ...params })));
		} catch (error) {
			return errorResponse(error);
		}
	}
}

export default Controller;
