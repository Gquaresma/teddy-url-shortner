import jwt, { Secret } from 'jsonwebtoken';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { errorResponse } from '../helpers/errorResponse';
import { AuthError } from '../errors/AuthError';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare global {
	namespace Express {
		// eslint-disable-next-line no-shadow
		interface Request {
			user?: any;
		}
	}
}

const auth: RequestHandler = async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> => {
	const token = req.header('Authorization')?.replace('Bearer ', '');

	if (!token) {
		res.status(401).json({ message: 'Unauthorized' });
		return;
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET as Secret);

		req.user = decoded;

		next();
	} catch (error) {
		if (error instanceof jwt.TokenExpiredError) {
			next(errorResponse(new AuthError('Invalid token')));
		} else {
			next(errorResponse(new AuthError('Auth Failed')));
		}
	}
};

export default auth;
