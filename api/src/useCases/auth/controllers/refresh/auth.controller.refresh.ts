import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { IResponseError, IResponseSuccess } from 'src/shared/ErrorHandling';
import { Messages } from 'src/shared/Services';
import { IResponse, Statuscode } from 'src/shared/interfaces';
import { Cookies, getDomain } from 'src/shared/utils';
import { IAuthRefreshResDto } from '../../dto';
import { AuthRefreshService } from '../../services';

@Controller('auth')
export class AuthRefreshController {
    constructor(
        private readonly authService: AuthRefreshService,
        private readonly message: Messages,
    ) {}

    @Get('refresh')
    async refresh(
        @Res({ passthrough: true }) res: Response,
        @Req() req: Request,
        @Cookies('refreshToken') refreshToken: string,
    ): IResponse<
        Promise<IResponseError | IResponseSuccess<IAuthRefreshResDto>>
    > {
        try {
            const response = await this.authService.refresh({
                jwtRefresh: refreshToken,
            });

            if (response.isException()) {
                const { message, statusCode } = response.exception;

                return {
                    message,
                    statusCode,
                };
            }
            if (response.isSuccess()) {
                const { message, statusCode, value } = response.success;

                const domain = getDomain(req);

                res.cookie('accessToken', value.accessToken, {
                    httpOnly: true,
                    sameSite: 'none',
                    secure: true,
                    domain,
                });

                res.cookie('refreshToken', value.refreshToken, {
                    httpOnly: true,
                    sameSite: 'none',
                    secure: true,
                    domain,
                });

                return { message, statusCode, value: value.JWT };
            }
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
