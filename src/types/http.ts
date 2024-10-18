export type HttpResponse = {
	statusCode: number;
	body: any;
	headers?: Record<string, string>;
};

export type HttpRequest = {
	body?: any;
	query?: any;
	params?: any;
};
