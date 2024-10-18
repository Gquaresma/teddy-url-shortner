import { DatabaseError } from '../errors/DatabaseError';
import { NotFoundError } from '../errors/NotFoundError';
import { UniqueConstraintError } from '../errors/UniqueConstraintError';
import { ValidatorError } from '../errors/ValidatorError';

interface ErrorsHandleType {
	[key: string]: Error;
}

export const handleError = (error: any) => {
	const errors: ErrorsHandleType = {
		V01: new ValidatorError(error.message),
		23505: new UniqueConstraintError(error.detail?.split('Key (')[1]?.split(')')[0]),
		23503: new NotFoundError(error.detail?.split('Key (')[1]?.split(')')[0]),
	};

	if (errors[error.code]) {
		throw errors[error.code];
	} else {
		const isDevEnvironment = (process.env.NODE_ENV || '').toLowerCase().includes('dev');
		throw new DatabaseError(
			isDevEnvironment ? String(error.constraint || error.message) : undefined,
		);
	}
};
