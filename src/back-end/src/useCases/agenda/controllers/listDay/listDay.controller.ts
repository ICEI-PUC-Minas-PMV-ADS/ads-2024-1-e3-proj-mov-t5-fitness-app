import { Controller, Get, Param } from '@nestjs/common';
import { DaysOfWeek } from '@prisma/client';
import { IResponseError, IResponseSuccess } from 'src/shared/ErrorHandling';
import { Messages } from 'src/shared/Services';
import { IResponse, Statuscode } from 'src/shared/interfaces';
import { IListDayAgendaRes } from '../../dto';
import { AgendaListDayService } from '../../services';

@Controller('agenda')
export class AgendaListDayController {
    constructor(
        private readonly agendaListDayService: AgendaListDayService,
        private readonly message: Messages,
    ) {}

    private getDay() {
        const currentDate = new Date();
        const dayOfWeek = currentDate.getDay();

        switch (dayOfWeek) {
            case 0:
                return DaysOfWeek.Sunday;
            case 1:
                return DaysOfWeek.Monday;
            case 2:
                return DaysOfWeek.Tuesday;
            case 3:
                return DaysOfWeek.Wednesday;
            case 4:
                return DaysOfWeek.Thursday;
            case 5:
                return DaysOfWeek.Friday;
            case 6:
                return DaysOfWeek.Saturday;
        }
    }

    @Get('/list-day/:userId')
    async listDay(
        @Param('userId') userId: string,
    ): IResponse<
        Promise<IResponseError | IResponseSuccess<IListDayAgendaRes>>
    > {
        try {
            const day = this.getDay();

            const response = await this.agendaListDayService.listDay({
                day,
                userId: parseInt(userId),
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
