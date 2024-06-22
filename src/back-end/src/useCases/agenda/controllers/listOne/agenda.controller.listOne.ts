import { Controller, Get, Query } from '@nestjs/common';
import { IResponseError, IResponseSuccess } from 'src/shared/ErrorHandling';
import { Messages } from 'src/shared/Services';
import { IResponse, Statuscode } from 'src/shared/interfaces';
import { IListOneAgendaDto, IListOneAgendaRes } from '../../dto';
import { AgendaListOneService } from '../../services';

@Controller('agenda')
export class AgendaListOneController {
    constructor(
        private readonly agendaListOneService: AgendaListOneService,
        private readonly message: Messages,
    ) {}

    @Get('/list/one')
    async listOne(
        @Query() { id, userId }: IListOneAgendaDto,
    ): IResponse<
        Promise<IResponseError | IResponseSuccess<IListOneAgendaRes[]>>
    > {
        try {
            const response = await this.agendaListOneService.listOne({
                id: Number(id),
                userId: Number(userId),
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
