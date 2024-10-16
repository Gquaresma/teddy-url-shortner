import { Request } from 'express';
import { Users } from '../../database/models/Users';

export default interface IController {
	findAll: (_data: Request & { user: Users }) => any;
	findOne: (_data: Request) => any;
	remove: (_data: Request) => any;
	update: (_data: Request) => any;
	save: (_data: Request) => any;
}
