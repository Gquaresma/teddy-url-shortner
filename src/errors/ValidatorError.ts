export class ValidatorError extends Error {
	code: string;

	constructor(message: string) {
		super(message);
		this.name = 'ValidatorError';
		this.code = 'V01';
	}
}
