import { Request } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import { BadRequestError } from '../errors/BadRequestError';

export const getUserIdFromToken = (req: Request): string | null => {
	let userId: string | null = null;

	const token = req.header('Authorization')?.replace('Bearer ', '');

	if (token) {
		try {
			const decoded = jwt.verify(token, process.env.JWT_SECRET as Secret) as Record<string, any>;
			userId = decoded.id;
		} catch (error: any) {
			throw new BadRequestError(error.message);
		}
	}

	return userId;
};
