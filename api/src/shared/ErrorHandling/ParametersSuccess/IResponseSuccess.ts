import { code } from '../../interfaces/StatusCode';

export interface IResponseSuccess<T> {
    message: string;
    statusCode: code;
    value?: T;
    meta?: any;
}
