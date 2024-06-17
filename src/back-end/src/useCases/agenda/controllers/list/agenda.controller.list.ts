import { Controller, Get, Query } from '@nestjs/common';
import { IResponseError, IResponseSuccess } from 'src/shared/ErrorHandling';
import { Messages } from 'src/shared/Services';
import { IResponse, Statuscode } from 'src/shared/interfaces';
import { IListAgendaDto, IListAgendaRes } from '../../dto/list.dto';
import { AgendaListAllService } from '../../services';

@Controller('agenda')
export class AgendaListAllController {
    constructor(
        private readonly agendaListAllService: AgendaListAllService,
        private readonly message: Messages,
    ) {}

    @Get('list')
    async list(
        @Query() { itemsPerPage, itemsToSkip }: IListAgendaDto,
    ): IResponse<
        Promise<IResponseError | IResponseSuccess<Array<IListAgendaRes>>>
    > {
        try {
            const response = await this.agendaListAllService.listAll({
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
