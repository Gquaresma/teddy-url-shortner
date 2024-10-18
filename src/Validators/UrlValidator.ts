import * as Schemas from './Schemas/urlYUP';
import Validator from './Validator';

class UrlValidator extends Validator {}

export default new UrlValidator(Schemas);
