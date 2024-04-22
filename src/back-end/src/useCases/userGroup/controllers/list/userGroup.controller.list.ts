import { Controller, Get, Query } from '@nestjs/common';
import { IResponseError, IResponseSuccess } from 'src/shared/ErrorHandling';
import { Messages } from 'src/shared/Services';
import { IResponse, Statuscode } from 'src/shared/interfaces';
import { IListUserGroupDto, IListUserGroupRes } from '../../dto/list.dto';
import { UserGroupListAllService } from '../../services';

@Controller('group')
export class UserGroupListAllController {
    constructor(
        private readonly userGroupListAllService: UserGroupListAllService,
        private readonly message: Messages,
    ) {}

    @Get('list')
    async list(
        @Query() { itemsPerPage, itemsToSkip }: IListUserGroupDto,
    ): IResponse<
        Promise<IResponseError | IResponseSuccess<Array<IListUserGroupRes>>>
    > {
        try {
            const response = await this.userGroupListAllService.listAll({
                itemsPerPage: Number(itemsPerPage),
                itemsToSkip: Number(itemsToSkip),
            });

            if (response.isException()) {
                const { message, statusCode, typeError } = response.exception;
                return { message, statusCode, typeError };
            }
            if (response.isSuccess()) {
                const { message, statusCode, value, meta } = response.success;
                return { message, statusCode, value, meta };
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
