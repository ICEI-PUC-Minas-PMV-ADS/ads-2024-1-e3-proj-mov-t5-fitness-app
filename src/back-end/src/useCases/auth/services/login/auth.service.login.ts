import { Injectable } from '@nestjs/common';

import {
    Either,
    ParametersError,
    ParametersSuccess,
    error,
    success,
} from 'src/shared/ErrorHandling';

import { JwtService } from '@nestjs/jwt';
import * as moment from 'moment';
import { env } from 'process';
import { UserRepositoryPrismaService } from 'src/repositoryQueries/user/prisma';
import { Messages } from 'src/shared/Services';
import { HandlePassword } from 'src/shared/Services/HandlePassword';
import { Statuscode } from 'src/shared/interfaces';
import { IAuthLoginReqDto } from '../../dto';
import { IAuthLoginResService } from '../../shared';
import { IPayloadJWT } from '../../shared/interfaces/IPayloadJWT';

@Injectable()
export class AuthLoginService {
    constructor(
        private jwtService: JwtService,
        private userRepositoryQueries: UserRepositoryPrismaService,
        private handlePassword: HandlePassword,
        private messages: Messages,
    ) {}

    async login({
        email,
        password,
    }: IAuthLoginReqDto): Promise<
        Either<ParametersError, ParametersSuccess<IAuthLoginResService>>
    > {
        try {
            if (!email)
                return error(
                    new ParametersError(
                        this.messages.language().errorUserNotExist,
                        Statuscode.BAD_REQUEST,
                        'authentication-error',
                    ),
                );

            if (!password)
                return error(
                    new ParametersError(
                        this.messages.language().authPasswordIsRequired,
                        Statuscode.BAD_REQUEST,
                        'authentication-error',
                    ),
                );

            const userAlreadyExist = await this.userRepositoryQueries.listOne({
                email,
                config: {
                    showPassword: true,
                },
            });

            if (!userAlreadyExist)
                return error(
                    new ParametersError(
                        this.messages.language().errorUserNotExist,
                        Statuscode.UNAUTHORIZED,
                        'authentication-error',
                    ),
                );

            const isValidPassword = await this.handlePassword.verify(
                password,
                userAlreadyExist.password,
            );

            if (!isValidPassword)
                return error(
                    new ParametersError(
                        this.messages.language().authVerifyPassOrEmail,
                        Statuscode.UNAUTHORIZED,
                        'authentication-error',
                    ),
                );

            const payloadJWT: IPayloadJWT = {
                id: userAlreadyExist.id,
                name: userAlreadyExist.name,
                email: userAlreadyExist.email,
                group: userAlreadyExist.userGroup,
            };

            // ------ JWT Contendo os Dados do Usuário ------
            const JWT = this.jwtService.sign(
                {
                    user: payloadJWT,
                    timeLogin: moment(new Date()).milliseconds(),
                },
                {
                    expiresIn: env.INACTIVITY_LIMIT_TOKEN_REFRESH,
                },
            );

            // ------ AccessToken com Criptografia JWT ------
            const accessToken = this.jwtService.sign(
                {
                    user: payloadJWT,
                    timeLogin: moment(new Date()).milliseconds(),
                },
                {
                    expiresIn: env.ACCESS_TOKEN_EXPIRES_IN,
                },
            );

            // ------ RefreshToken com Criptografia JWT ------
            const refreshToken = this.jwtService.sign(
                {
                    user: payloadJWT,
                    timeLogin: moment(new Date()).milliseconds(),
                },
                {
                    expiresIn: env.INACTIVITY_LIMIT_TOKEN_REFRESH,
                },
            );

            return success(
                new ParametersSuccess(
                    this.messages.language().authSuccessfullyLogin,
                    Statuscode.OK,
                    {
                        accessToken,
                        JWT,
                        refreshToken,
                    },
                ),
            );
        } catch (error) {
            console.error(error);
            return error(
                new ParametersError(
                    'unknown-error',
                    Statuscode.INTERNAL_SERVER_ERROR,
                    this.messages.language().internalServerError,
                ),
            );
        }
    }
}
