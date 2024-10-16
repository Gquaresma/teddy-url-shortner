import IRepository from '../types/interfaces/repository';
import IService from '../types/interfaces/services';

abstract class Service implements IService {
	protected repository: IRepository;

	constructor(repository: IRepository) {
		this.repository = repository;
	}

	async findAll(condition?: any, fields?: string[], options?: {}) {
		return this.repository.findMany(condition, fields, options);
	}

	async findOne(condition: any, fields?: string[]) {
		return this.repository.findUnique(condition, fields);
	}

	async save(data: any) {
		return this.repository.create(data);
	}

	async update(data: any, condition?: any) {
		return this.repository.update(data, condition);
	}

	async remove({ id }: any, condition?: any) {
		return this.repository.delete({ id }, condition);
	}
}

export default Service;
