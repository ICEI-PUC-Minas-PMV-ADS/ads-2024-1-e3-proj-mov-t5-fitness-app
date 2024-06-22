import { Injectable } from '@nestjs/common';

import {
    Either,
    ParametersError,
    ParametersSuccess,
    error,
    success,
} from 'src/shared/ErrorHandling';

import { AgendaRepositoryPrismaService } from 'src/repositoryQueries/agenda/prisma';
import { ExerciseRepositoryPrismaService } from 'src/repositoryQueries/exercises/prisma';
import { Messages } from 'src/shared/Services';
import { Statuscode } from 'src/shared/interfaces';
import { TypeError } from 'src/shared/interfaces/TypeErrors';
import { ICreateAgendaDto, ICreateAgendaRes } from '../../dto';

@Injectable()
export class AgendaCreateService {
    constructor(
        private agendaRepositoryQueries: AgendaRepositoryPrismaService,
        private exercisesRepositoryQueries: ExerciseRepositoryPrismaService,
        private messages: Messages,
    ) {}

    private getRandomExercises(
        arr: {
            id: number;
        }[],
        num: number,
    ) {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }

    async create({
        days,
        exercises,
        userId,
    }: ICreateAgendaDto): Promise<
        Either<ParametersError, ParametersSuccess<ICreateAgendaRes[]>>
    > {
        try {
            if (!exercises || exercises.length < 1) {
                const dataAutoExercises =
                    await this.exercisesRepositoryQueries.list({
                        itemsPerPage: 100,
                        itemsToSkip: 0,
                    });

                if (
                    !dataAutoExercises.data ||
                    dataAutoExercises.data.length < 1
                ) {
                    return error(
                        new ParametersError(
                            this.messages.language().exerciseNotReported,
                            Statuscode.INTERNAL_SERVER_ERROR,
                            TypeError.INTERNAL_SERVER_ERROR,
                        ),
                    );
                } else
                    exercises = dataAutoExercises.data.map((exercice) => ({
                        id: exercice.id,
                    }));
            }

            const newAgendas = [];

            for (const day of days) {
                let data = undefined;

                const exist = await this.agendaRepositoryQueries.listDay({
                    day,
                    userId,
                });

                if (!exist) {
                    data = await this.agendaRepositoryQueries.create({
                        day,
                        exercises: this.getRandomExercises(exercises, 6),
                        userId,
                    });
                }

                newAgendas.push(data);
            }

            if (!newAgendas || newAgendas.length < 1)
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
                    newAgendas,
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
