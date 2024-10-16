export default interface IRepository {
	findMany: (_condition?: any, _fields?: any[], _options?: {}) => any;
	findUnique: (_data: any, _fields?: any[]) => any;
	delete: (_data: any, _condition?: any) => any;
	update: (_data: any, _original?: any) => any;
	create: (_data: any) => any;
}
