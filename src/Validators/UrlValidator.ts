import * as Schemas from './Schemas/urlYUP';
import Validator from './Validator';
// import { options } from '../helpers/validationOptions';
// import { IUrlSchema } from '../types/interfaces/url';

class UrlValidator extends Validator {
	// async validatePost(data: Record<string, any>) {
	// 	return (this.schemas as IUrlSchema).urlSchema.validate(data, options);
	// }
}

export default new UrlValidator(Schemas);
