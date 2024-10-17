import yup from '../../helpers/yup';
import ISchema from './schemas';

export interface IAuthSchema extends ISchema {
	loginSchema: yup.AnyObjectSchema;
}
