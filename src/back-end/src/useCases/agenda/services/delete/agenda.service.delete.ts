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
import { IDeleteAgendaDto, IDeleteAgendaResDto } from '../../dto';

@Injectable()
export class AgendaDeletedService {
    constructor(
        private agendaRepositoryQueries: AgendaRepositoryPrismaService,
        private messages: Messages,
    ) {}

    async delete({
        id,
    }: IDeleteAgendaDto): Promise<
        Either<ParametersError, ParametersSuccess<IDeleteAgendaResDto>>
    > {
        try {
            const agendaDeleted = await this.agendaRepositoryQueries.delete({
                id,
            });

            if (!agendaDeleted)
                return error(
                    new ParametersError(
                        this.messages.language().errorDeletedAgenda,
                        Statuscode.INTERNAL_SERVER_ERROR,
                        TypeError.INTERNAL_SERVER_ERROR,
                    ),
                );

            return success(
                new ParametersSuccess(
                    this.messages.language().successDeletedAgenda,
                    Statuscode.OK,
                    agendaDeleted,
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
