import yup from '../../helpers/yup';

const postSchema = yup.object({
	url: yup.string().url().required(),
	userId: yup.string().optional(),
});

const getSchema = yup.object({});

const getOneSchema = yup.object({
	shortedUrl: yup.string().required(),
});

const putSchema = yup.object({
	newUrl: yup.string().url().required(),
	shortUrl: yup.string().required(),
});

export { postSchema, getSchema, getOneSchema, putSchema };
