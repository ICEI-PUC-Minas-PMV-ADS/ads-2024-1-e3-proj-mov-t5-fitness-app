import { Body, Controller, Param, Put } from '@nestjs/common';
import { IResponseError, IResponseSuccess } from 'src/shared/ErrorHandling';
import { Messages } from 'src/shared/Services';
import { IResponse, Statuscode } from 'src/shared/interfaces';
import { IUpdateUserGroupDto, IUpdateUserGroupRes } from '../../dto';
import { UserGroupUpdateService } from '../../services';

@Controller('group')
export class UserGroupUpdateController {
    constructor(
        private readonly userGroupUpdateService: UserGroupUpdateService,
        private readonly message: Messages,
    ) {}

    @Put('update/:id')
    async update(
        @Param('id') id: string,
        @Body()
        { name }: IUpdateUserGroupDto,
    ): IResponse<
        Promise<IResponseError | IResponseSuccess<IUpdateUserGroupRes>>
    > {
        try {
            const response = await this.userGroupUpdateService.update({
                id: Number(id),
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
