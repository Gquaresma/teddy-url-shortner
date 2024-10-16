export class DatabaseError extends Error {
	constructor(message?: string) {
		super(message || `Erro genérico no acesso ao banco de dados`);
		this.name = 'DatabaseError';
	}
}
