import { Body, Controller, Post } from '@nestjs/common';
import { IResponseError, IResponseSuccess } from 'src/shared/ErrorHandling';
import { Messages } from 'src/shared/Services';
import { IResponse, Statuscode } from 'src/shared/interfaces';
import { ICreateAgendaDto, ICreateAgendaRes } from '../../dto';
import { AgendaCreateService } from '../../services';

@Controller('agenda')
export class AgendaCreateController {
    constructor(
        private readonly agendaCreateService: AgendaCreateService,
        private readonly message: Messages,
    ) {}

    @Post('create')
    async create(
        @Body()
        { days, exercises, userId }: ICreateAgendaDto,
    ): IResponse<Promise<IResponseError | IResponseSuccess<ICreateAgendaRes>>> {
        try {
            const response = await this.agendaCreateService.create({
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
