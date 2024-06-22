import { Body, Controller, Param, Put } from '@nestjs/common';
import { IResponseError, IResponseSuccess } from 'src/shared/ErrorHandling';
import { Messages } from 'src/shared/Services';
import { IResponse, Statuscode } from 'src/shared/interfaces';
import { IUpdateAgendaDto, IUpdateAgendaRes } from '../../dto';
import { AgendaUpdateService } from '../../services';

@Controller('agenda')
export class AgendaUpdateController {
    constructor(
        private readonly agendaUpdateService: AgendaUpdateService,
        private readonly message: Messages,
    ) {}

    @Put('/update/:id')
    async update(
        @Param('id') id: string,
        @Body()
        { days, exercises, userId }: IUpdateAgendaDto,
    ): IResponse<Promise<IResponseError | IResponseSuccess<IUpdateAgendaRes>>> {
        try {
            const response = await this.agendaUpdateService.update({
                id: Number(id),
                days,
                exercises,
                userId,
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
