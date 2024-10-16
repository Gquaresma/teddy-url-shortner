import * as Schemas from './Schemas/userYUP';
import Validator from './Validator';

class UserValidator extends Validator {}

export default new UserValidator(Schemas);
