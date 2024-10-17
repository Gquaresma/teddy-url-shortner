import yup from '../../helpers/yup';
import { loginSchema } from '../../Validators/Schemas/userYUP';

export type loginDto = yup.InferType<typeof loginSchema>;
