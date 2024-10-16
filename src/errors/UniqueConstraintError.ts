export class UniqueConstraintError extends Error {
	constructor(message: string) {
		super(`${message} já existente.`);
		this.name = 'UniqueConstraintError';
	}
}
