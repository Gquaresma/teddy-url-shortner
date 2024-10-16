import yup from '../../helpers/yup';

export default interface ISchema {
	getSchema: yup.AnyObjectSchema;
	getOneSchema: yup.AnyObjectSchema;
	postSchema: yup.AnyObjectSchema;
	putSchema: yup.AnyObjectSchema;
}
