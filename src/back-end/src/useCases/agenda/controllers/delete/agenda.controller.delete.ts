import { Controller, Delete, Param } from '@nestjs/common';
import { IResponseError, IResponseSuccess } from 'src/shared/ErrorHandling';
import { Messages } from 'src/shared/Services';
import { IResponse, Statuscode } from 'src/shared/interfaces';
import { IDeleteAgendaResDto } from '../../dto';
import { AgendaDeletedService } from '../../services';

@Controller('agenda')
export class AgendaDeletedController {
    constructor(
        private readonly agendaDeletedService: AgendaDeletedService,
        private readonly message: Messages,
    ) {}

    @Delete('delete/:id')
    async delete(
        @Param('id') id: string,
    ): IResponse<
        Promise<IResponseError | IResponseSuccess<IDeleteAgendaResDto>>
    > {
        try {
            const response = await this.agendaDeletedService.delete({
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
