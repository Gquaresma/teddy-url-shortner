import { ValidatorError } from '../errors/ValidatorError';
import { options } from '../helpers/validationOptions';
import ISchema from '../types/interfaces/schemas';
import IValidator from '../types/interfaces/validators';

abstract class Validator implements IValidator {
	protected schemas: ISchema;

	constructor(schemas: ISchema) {
		this.schemas = schemas;
	}

	async validateGet(data: any) {
		try {
			return await this.schemas.getSchema.validate(data, options);
		} catch (error: any) {
			throw new ValidatorError(error.errors || error.message);
		}
	}

	async validateGetOne(data: any) {
		try {
			return await this.schemas.getOneSchema.validate(data, options);
		} catch (error: any) {
			throw new ValidatorError(error.errors || error.message);
		}
	}

	async validatePut(data: any) {
		try {
			return await this.schemas.putSchema.validate(data, options);
		} catch (error: any) {
			throw new ValidatorError(error.errors || error.message);
		}
	}

	async validatePost(data: any) {
		try {
			return await this.schemas.postSchema.validate(data, options);
		} catch (error: any) {
			throw new ValidatorError(error.errors || error.message);
		}
	}
}

export default Validator;
