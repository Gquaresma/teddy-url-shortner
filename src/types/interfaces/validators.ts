export default interface IValidator {
	validateGet: (_data: any) => Promise<any>;
	validateGetOne: (_data: any) => Promise<any>;
	validatePost: (_data: any) => Promise<any>;
	validatePut: (_data: any) => Promise<any>;
}
