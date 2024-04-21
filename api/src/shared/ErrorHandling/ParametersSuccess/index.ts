import { code } from '../../interfaces/StatusCode';

export class ParametersSuccess<T> {
    constructor(
        private _message: string,
        private _statusCode: code,
        private _value: T,
        private _meta?: any,
    ) {}

    get message() {
        return this._message;
    }

    get statusCode() {
        return this._statusCode;
    }

    get value() {
        return this._value;
    }

    get meta() {
        return this._meta;
    }
}
