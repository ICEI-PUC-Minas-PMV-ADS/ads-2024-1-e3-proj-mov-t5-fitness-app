import { Body, Controller, Post } from '@nestjs/common';
import { IResponseError, IResponseSuccess } from 'src/shared/ErrorHandling';
import { Messages } from 'src/shared/Services';
import { IResponse, Statuscode } from 'src/shared/interfaces';
import { ICreateUserGroupDto, ICreateUserGroupRes } from '../../dto';
import { UserGroupCreateService } from '../../services';

@Controller('group')
export class UserGroupCreateController {
    constructor(
        private readonly userGroupCreateService: UserGroupCreateService,
        private readonly message: Messages,
    ) {}

    @Post('create')
    async create(
        @Body()
        { name }: ICreateUserGroupDto,
    ): IResponse<
        Promise<IResponseError | IResponseSuccess<ICreateUserGroupRes>>
    > {
        try {
            const response = await this.userGroupCreateService.create({
                name,
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
