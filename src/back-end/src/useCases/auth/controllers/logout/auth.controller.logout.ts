import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { IResponseError, IResponseSuccess } from 'src/shared/ErrorHandling';
import { Messages } from 'src/shared/Services';
import { IResponse, Statuscode } from 'src/shared/interfaces';

@Controller('auth')
export class AuthLogoutController {
    constructor(private readonly message: Messages) {}

    @Get('logout')
    async logout(
        @Res({ passthrough: true }) res: Response,
    ): IResponse<Promise<IResponseError | IResponseSuccess<boolean>>> {
        try {
            res.clearCookie('accessToken');
            res.clearCookie('refreshToken');
            res.removeHeader('Cookie');

            return {
                message: this.message.language().authSuccessfullyLogout,
                statusCode: Statuscode.OK,
            };
        } catch (error) {
            console.error(error);
            return {
                statusCode: Statuscode.INTERNAL_SERVER_ERROR,
                message: this.message.language().internalServerError,
                value: error,
            };
        }
    }
}
