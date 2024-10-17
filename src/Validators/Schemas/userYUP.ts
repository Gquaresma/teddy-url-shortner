import yup from '../../helpers/yup';

const postSchema = yup.object({
	name: yup.string().max(100).required(),
	email: yup.string().email().required(),
	password: yup.string().min(6).required(),
});

const getSchema = yup.object({
	page: yup.number().min(1).default(1),
	limit: yup.number().min(1).max(100).default(10),
});

const getOneSchema = yup.object({
	id: yup.string().required(),
});

const putSchema = yup.object({
	name: yup.string().max(100).required(),
	email: yup.string().email().required(),
	password: yup.string().min(6).required(),
});

const loginSchema = yup.object({
	email: yup.string().email().required(),
	password: yup.string().min(6).required(),
});

export { postSchema, getOneSchema, putSchema, getSchema, loginSchema };
