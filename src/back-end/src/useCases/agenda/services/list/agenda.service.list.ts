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
import { IListAgendaDto, IListAgendaRes } from '../../dto';

@Injectable()
export class AgendaListAllService {
    constructor(
        private agendaRepositoryQueries: AgendaRepositoryPrismaService,
        private messages: Messages,
    ) {}

    async listAll({
        itemsPerPage,
        itemsToSkip,
    }: IListAgendaDto): Promise<
        Either<ParametersError, ParametersSuccess<Array<IListAgendaRes>>>
    > {
        try {
            const { data: agendas, meta } =
                await this.agendaRepositoryQueries.list({
                    itemsPerPage,
                    itemsToSkip,
                });

            if (agendas.length < 1)
                return error(
                    new ParametersError(
                        this.messages.language().errorListAgendaAll,
                        Statuscode.NO_CONTENT,
                        TypeError.NO_CONTENT,
                    ),
                );

            return success(
                new ParametersSuccess(
                    this.messages.language().successListAgendaAll,
                    Statuscode.OK,
                    agendas,
                    meta,
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
