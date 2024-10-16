export type HttpResponse = {
	statusCode: number;
	body: any;
	file?: { mimeType: string; data: Buffer };
};

export type HttpRequest = {
	body?: any;
	query?: any;
	params?: any;
};
