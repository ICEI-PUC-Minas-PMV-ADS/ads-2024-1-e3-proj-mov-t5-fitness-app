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
import { IListOneAgendaDto, IListOneAgendaRes } from '../../dto';

@Injectable()
export class AgendaListOneService {
    constructor(
        private agendaRepositoryQueries: AgendaRepositoryPrismaService,
        private messages: Messages,
    ) {}

    async listOne({
        id,
        userId,
    }: IListOneAgendaDto): Promise<
        Either<ParametersError, ParametersSuccess<IListOneAgendaRes>>
    > {
        try {
            const agenda = await this.agendaRepositoryQueries.listOne({
                id,
                userId,
            });

            if (!agenda || !agenda.id)
                return error(
                    new ParametersError(
                        this.messages.language().errorListAgenda,
                        Statuscode.BAD_REQUEST,
                        TypeError.BAD_REQUEST,
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
