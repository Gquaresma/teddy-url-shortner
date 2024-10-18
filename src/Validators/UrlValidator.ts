import * as Schemas from './Schemas/urlYUP';
import Validator from './Validator';
import { IUrlSchema } from '../types/interfaces/url';

class UrlValidator extends Validator {
	async validateSoftDelete(data: string) {
		return (this.schemas as IUrlSchema).softDeleteSchema.validate(data);
	}
}

export default new UrlValidator(Schemas);
