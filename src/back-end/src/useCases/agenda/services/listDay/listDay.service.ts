import { Injectable } from '@nestjs/common';

import {
    Either,
    ParametersError,
    ParametersSuccess,
    error,
    success,
} from 'src/shared/ErrorHandling';

import { AgendaRepositoryPrismaService } from 'src/repositoryQueries/agenda/prisma';
import { Messages } from 'src/shared/Services';
import { Statuscode } from 'src/shared/interfaces';
import { TypeError } from 'src/shared/interfaces/TypeErrors';
import { IListDayAgendaDto, IListDayAgendaRes } from '../../dto';

@Injectable()
export class AgendaListDayService {
    constructor(
        private agendaRepositoryQueries: AgendaRepositoryPrismaService,
        private messages: Messages,
    ) {}

    async listDay({
        day,
        userId,
    }: IListDayAgendaDto): Promise<
        Either<ParametersError, ParametersSuccess<IListDayAgendaRes>>
    > {
        try {
            const agenda = await this.agendaRepositoryQueries.listDay({
                day,
                userId,
            });

            if (!agenda)
                return error(
                    new ParametersError(
                        this.messages.language().errorAgendaNotExist,
                        Statuscode.NO_CONTENT,
                        TypeError.NO_CONTENT,
                    ),
                );

            return success(
                new ParametersSuccess(
                    this.messages.language().successListAgenda,
                    Statuscode.OK,
                    agenda,
                ),
            );
        } catch (error) {
            console.log(error);
            return error(
                new ParametersError(
                    this.messages.language().internalServerError,
                    Statuscode.INTERNAL_SERVER_ERROR,
                    TypeError.INTERNAL_SERVER_ERROR,
                    error,
                ),
            );
        }
    }
}
