import { Injectable } from '@nestjs/common';

import {
    Either,
    ParametersError,
    ParametersSuccess,
    error,
    success,
} from 'src/shared/ErrorHandling';

import { ExerciseRepositoryPrismaService } from 'src/repositoryQueries/exercises/prisma';
import { Messages } from 'src/shared/Services';
import { Statuscode } from 'src/shared/interfaces';
import { TypeError } from 'src/shared/interfaces/TypeErrors';
import { IDeleteExerciseDto, IDeleteExerciseResDto } from '../../dto';

@Injectable()
export class ExerciseDeletedService {
    constructor(
        private exerciseRepositoryQueries: ExerciseRepositoryPrismaService,
        private messages: Messages,
    ) {}

    async delete({
        id,
    }: IDeleteExerciseDto): Promise<
        Either<ParametersError, ParametersSuccess<IDeleteExerciseResDto>>
    > {
        try {
            const exerciseDeleted = await this.exerciseRepositoryQueries.delete(
                {
                    id,
                },
            );

            if (!exerciseDeleted)
                return error(
                    new ParametersError(
                        this.messages.language().errorDeletedExercise,
                        Statuscode.INTERNAL_SERVER_ERROR,
                        TypeError.INTERNAL_SERVER_ERROR,
                    ),
                );

            return success(
                new ParametersSuccess(
                    this.messages.language().successDeletedExercise,
                    Statuscode.OK,
                    exerciseDeleted,
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
