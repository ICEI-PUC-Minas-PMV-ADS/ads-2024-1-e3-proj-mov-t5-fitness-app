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
import { ICreateAgendaDto, ICreateAgendaRes } from '../../dto';

@Injectable()
export class AgendaCreateService {
    constructor(
        private agendaRepositoryQueries: AgendaRepositoryPrismaService,
        private messages: Messages,
    ) {}

    async create({
        days,
        exercises,
        userId,
    }: ICreateAgendaDto): Promise<
        Either<ParametersError, ParametersSuccess<ICreateAgendaRes>>
    > {
        try {
            const agendaAlreadyExist =
                await this.agendaRepositoryQueries.alreadyExist({
                    userId,
                });

            if (agendaAlreadyExist)
                return error(
                    new ParametersError(
                        this.messages.language().errorAgendaAlreadyExist,
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

            const newAgenda = await this.agendaRepositoryQueries.create({
                days,
                exercises,
                userId,
            });

            if (!newAgenda)
                return error(
                    new ParametersError(
                        this.messages.language().errorCreatedAgenda,
                        Statuscode.INTERNAL_SERVER_ERROR,
                        TypeError.INTERNAL_SERVER_ERROR,
                    ),
                );

            return success(
                new ParametersSuccess(
                    this.messages.language().successCreatedAgenda,
                    Statuscode.CREATED,
                    newAgenda,
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
