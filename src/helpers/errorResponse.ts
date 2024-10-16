import { HttpResponse } from '../types/http';
import {
	badRequest,
	failedDependency,
	forbidden,
	notFound,
	serverError,
	unauthorized,
	unprocessableEntity,
} from './httpResponses';

interface httpResponseType {
	[key: string]: HttpResponse;
}

export const errorResponse = (error: unknown) => {
	const { name, message } =
		error instanceof Error
			? { name: error.name, message: error.message }
			: { name: 'Error', message: String(error) };

	const httpResponse: httpResponseType = {
		FileError: badRequest(message),
		ForeignKeyError: badRequest(message),
		BadRequestError: badRequest(message),
		NotFoundError: notFound(message),
		DatabaseError: badRequest(message),
		UniqueConstraintError: badRequest(message),
		ValidatorError: unprocessableEntity(message),
		APIExternalError: failedDependency(message),
		AuthError: unauthorized(message),
		ForbiddenError: forbidden(message),
	};

	return httpResponse[name] || serverError(message);
};
