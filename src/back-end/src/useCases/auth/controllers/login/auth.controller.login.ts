import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { IResponseError, IResponseSuccess } from 'src/shared/ErrorHandling';
import { Messages } from 'src/shared/Services';
import { IResponse, Statuscode } from 'src/shared/interfaces';
import { getDomain } from 'src/shared/utils/getAllDomains';
import { IAuthLoginReqDto, IAuthLoginResDto } from '../../dto';
import { AuthLoginService } from '../../services';

@Controller('auth')
export class AuthLoginController {
    constructor(
        private readonly authService: AuthLoginService,
        private readonly message: Messages,
    ) {}

    @Post('login')
    async login(
        @Body() { email, password }: IAuthLoginReqDto,
        @Req() req: Request,
        @Res({ passthrough: true }) res: Response,
    ): IResponse<Promise<IResponseError | IResponseSuccess<IAuthLoginResDto>>> {
        try {
            const response = await this.authService.login({
                email,
                password,
            });

            if (response.isException()) {
                const { message, statusCode } = response.exception;
                return { message, statusCode };
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
