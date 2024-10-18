import yup from '../../helpers/yup';
import ISchema from './schemas';

export interface IUrlSchema extends ISchema {
	urlSchema: yup.AnyObjectSchema;
}
