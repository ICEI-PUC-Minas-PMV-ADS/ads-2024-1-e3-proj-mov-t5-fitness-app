import { code } from 'src/shared/interfaces';
import { IPayloadJWT } from './IPayloadJWT';

export interface IDecodedJWT {
    user: IPayloadJWT;
    randomSeed: number;
    timeLogin: number;
}

export interface IJwtValid {
    type: string;
    isValid: boolean;
    message: string;
    statusCode: code;
    value: any;
}
