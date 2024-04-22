import { Body, Controller, Post } from '@nestjs/common';
import { IResponseError, IResponseSuccess } from 'src/shared/ErrorHandling';
import { Messages } from 'src/shared/Services';
import { IResponse, Statuscode } from 'src/shared/interfaces';
import { ICreateUserDto, ICreateUserRes } from '../../dto';
import { UserCreateService } from '../../services';

@Controller('user')
export class UserCreateController {
    constructor(
        private readonly userCreateService: UserCreateService,
        private readonly message: Messages,
    ) {}

    @Post('create')
    async create(
        @Body()
        { email, name, password, userGroupId }: ICreateUserDto,
    ): IResponse<Promise<IResponseError | IResponseSuccess<ICreateUserRes>>> {
        try {
            const response = await this.userCreateService.create({
                email,
                name,
                password,
                userGroupId: Number(userGroupId),
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
