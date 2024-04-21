import { Body, Controller, Param, Put } from '@nestjs/common';
import { IResponseError, IResponseSuccess } from 'src/shared/ErrorHandling';
import { Messages } from 'src/shared/Services';
import { IResponse, Statuscode } from 'src/shared/interfaces';
import { IUpdateUserDto, IUpdateUserRes } from '../../dto';
import { UserUpdateService } from '../../services';

@Controller('user')
export class UserUpdateController {
    constructor(
        private readonly userUpdateService: UserUpdateService,
        private readonly message: Messages,
    ) {}

    @Put('update/:id')
    async update(
        @Param('id') id: string,
        @Body()
        { name, email, password }: IUpdateUserDto,
    ): IResponse<Promise<IResponseError | IResponseSuccess<IUpdateUserRes>>> {
        try {
            const response = await this.userUpdateService.update({
                id: Number(id),
                name,
                email,
                password,
            });

            if (response.isException()) {
                const { message, statusCode, internalError, typeError } =
                    response.exception;
                return { message, statusCode, internalError, typeError };
            }
            if (response.isSuccess()) {
                const { message, statusCode, value } = response.success;
                return { message, statusCode, value };
            }
        } catch (error) {
            console.log(error);
            return {
                statusCode: Statuscode.INTERNAL_SERVER_ERROR,
                message: this.message.language().internalServerError,
                value: error,
            };
        }
    }
}
