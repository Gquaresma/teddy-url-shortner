export default interface IService {
	findAll: (_condition?: any, _fields?: string[]) => any;
	findOne: (_data: any, _fields?: string[]) => any;
	remove: (_data: any, _condition?: any) => any;
	update: (_data: any, _condition?: any) => any;
	save: (_data: any) => any;
}
