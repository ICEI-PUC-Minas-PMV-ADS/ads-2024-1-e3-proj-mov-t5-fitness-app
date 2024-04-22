import { Injectable } from '@nestjs/common';

import {
    Either,
    ParametersError,
    ParametersSuccess,
    error,
    success,
} from 'src/shared/ErrorHandling';

import { JwtService } from '@nestjs/jwt';
import { verify } from 'jsonwebtoken';
import * as moment from 'moment';
import { env } from 'process';
import { Messages } from 'src/shared/Services';
import { Statuscode } from 'src/shared/interfaces';
import { IAuthRefreshReqDto, IAuthRefreshResServiceDto } from '../../dto';
import { IJwtValid } from '../../shared/interfaces/IDecodedJWT';

@Injectable()
export class AuthRefreshService {
    constructor(private jwtService: JwtService, private messages: Messages) {}

    async refresh({
        jwtRefresh,
    }: IAuthRefreshReqDto): Promise<
        Either<ParametersError, ParametersSuccess<IAuthRefreshResServiceDto>>
    > {
        try {
            if (!jwtRefresh)
                return error(
                    new ParametersError(
                        this.messages.language().internalServerError,
                        Statuscode.INTERNAL_SERVER_ERROR,
                        'authentication-error',
                    ),
                );

            // @ts-ignore
            const JwtVerify = verify(
                jwtRefresh,
                env.SECRET_KEY,
                function (err, decoded) {
                    if (err) {
                        if (err.name === 'TokenExpiredError') {
                            err = {
                                // @ts-ignore
                                type: 'expired-refresh-token-error',
                                isValid: false,
                                statusCode: Statuscode.UNAUTHORIZED,
                                message: 'Sessão expirada!',
                                value: {
                                    internalMessage:
                                        'O refresh token do usuário expirou.',
                                },
                            };
                        } else {
                            err = {
                                // @ts-ignore
                                type: 'internal-server-error',
                                isValid: false,
                                statusCode: 500,
                                message:
                                    'Erro interno do servidor! Por favor, tente novamente mais tarde.',
                                value: {
                                    internalMessage: err.message,
                                },
                            };
                        }

                        return err;
                    }

                    // @ts-ignore
                    delete decoded.iat;
                    // @ts-ignore
                    delete decoded.exp;

                    return {
                        type: 'valid-token',
                        isValid: true,
                        message: 'Token Valido.',
                        statusCode: 200,
                        value: {
                            // @ts-ignore
                            ...decoded,
                        },
                    };
                },
            ) as IJwtValid;

            if (!JwtVerify.isValid)
                return error(
                    new ParametersError(
                        JwtVerify.message,
                        JwtVerify.statusCode,
                        JwtVerify.type,
                    ),
                );

            // ------ JWT Contendo os Dados do Usuário ------
            const JWT = this.jwtService.sign(
                {
                    ...JwtVerify.value,
                    timeRefresh: moment(new Date()).milliseconds(),
                },
                {
                    expiresIn: env.INACTIVITY_LIMIT_TOKEN_REFRESH,
                },
            );

            // ------ AccessToken com Criptografia JWT ------
            const accessToken = this.jwtService.sign(
                {
                    ...JwtVerify.value,
                    timeRefresh: moment(new Date()).milliseconds(),
                },
                {
                    expiresIn: env.ACCESS_TOKEN_EXPIRES_IN,
                },
            );

            // ------ RefreshToken com Criptografia JWT ------
            const refreshToken = this.jwtService.sign(
                {
                    ...JwtVerify.value,
                    timeRefresh: moment(new Date()).milliseconds(),
                },
                {
                    expiresIn: env.INACTIVITY_LIMIT_TOKEN_REFRESH,
                },
            );

            return success(
                new ParametersSuccess(
                    this.messages.language().authSuccessfullyRefresh,
                    Statuscode.OK,
                    {
                        accessToken,
                        refreshToken,
                        JWT,
                    },
                ),
            );
        } catch (err) {
            console.error(err);
            return error(
                new ParametersError(
                    this.messages.language().internalServerError,
                    Statuscode.INTERNAL_SERVER_ERROR,
                    'INTERNAL_SERVER_ERROR',
                ),
            );
        }
    }
}
