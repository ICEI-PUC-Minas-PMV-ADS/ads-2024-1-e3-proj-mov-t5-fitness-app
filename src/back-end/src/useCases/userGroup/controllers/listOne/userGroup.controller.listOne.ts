import { Controller, Get, Param } from '@nestjs/common';
import { IResponseError, IResponseSuccess } from 'src/shared/ErrorHandling';
import { Messages } from 'src/shared/Services';
import { IResponse, Statuscode } from 'src/shared/interfaces';
import { IListOneUserGroupRes } from '../../dto';
import { UserGroupListOneService } from '../../services';

@Controller('group')
export class UserGroupListOneController {
    constructor(
        private readonly userListOneService: UserGroupListOneService,
        private readonly message: Messages,
    ) {}

    @Get('list/:id')
    async listOne(
        @Param('id') id: string,
    ): IResponse<
        Promise<IResponseError | IResponseSuccess<IListOneUserGroupRes>>
    > {
        try {
            const response = await this.userListOneService.listOne({
                id: Number(id),
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
