import { code } from '../../interfaces/StatusCode';

export class ParametersError extends Error {
    private _message: string;
    private _statusCode: code;
    private _typeError: string;
    private _internalError?: string;

    constructor(
        message: string,
        statusCode: code,
        typeError: string,
        internalError?: string,
    ) {
        super(message);

        this._message = message;
        this._statusCode = statusCode;
        this._typeError = typeError;
        this._internalError = internalError;
    }

    get message() {
        return this._message;
    }

    get statusCode() {
        return this._statusCode;
    }

    get typeError() {
        return this._typeError;
    }

    get internalError() {
        return this._internalError;
    }
}
