import yup from '../../helpers/yup';
import { postSchema } from '../../Validators/Schemas/urlYUP';

export type urlDto = yup.InferType<typeof postSchema>;
