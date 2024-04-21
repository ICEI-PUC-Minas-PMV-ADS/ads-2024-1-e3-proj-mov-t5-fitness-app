export interface IResponseError {
    message: string;
    statusCode: number;
    typeError: string;
    internalError?: string;
}
