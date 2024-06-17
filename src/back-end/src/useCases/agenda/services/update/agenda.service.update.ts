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
import { IUpdateAgendaDto, IUpdateAgendaRes } from '../../dto';

@Injectable()
export class AgendaUpdateService {
    constructor(
        private agendaRepositoryQueries: AgendaRepositoryPrismaService,
        private messages: Messages,
    ) {}

    async update({
        id,
        days,
        exercises,
        userId,
    }: IUpdateAgendaDto): Promise<
        Either<ParametersError, ParametersSuccess<IUpdateAgendaRes>>
    > {
        try {
            const agendaAlreadyExist =
                await this.agendaRepositoryQueries.alreadyExist({ id, userId });

            if (!agendaAlreadyExist)
                return error(
                    new ParametersError(
                        this.messages.language().errorAgendaNotExist,
                        Statuscode.INTERNAL_SERVER_ERROR,
                        TypeError.INTERNAL_SERVER_ERROR,
                    ),
                );

            if (!exercises || exercises.length < 1)
                return error(
                    new ParametersError(
                        this.messages.language().exerciseNotReported,
                        Statuscode.INTERNAL_SERVER_ERROR,
                        TypeError.INTERNAL_SERVER_ERROR,
                    ),
                );

            if (!days || days.length < 1)
                return error(
                    new ParametersError(
                        this.messages.language().daysNotReported,
                        Statuscode.INTERNAL_SERVER_ERROR,
                        TypeError.INTERNAL_SERVER_ERROR,
                    ),
                );

            const agendaUpdated = await this.agendaRepositoryQueries.update({
                id,
                days,
                exercises,
                userId,
            });

            if (!agendaUpdated)
                return error(
                    new ParametersError(
                        this.messages.language().errorUpdatedAgenda,
                        Statuscode.BAD_REQUEST,
                        TypeError.BAD_REQUEST,
                    ),
                );

            return success(
                new ParametersSuccess(
                    this.messages.language().successUpdatedAgenda,
                    Statuscode.OK,
                    agendaUpdated,
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
