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
import { IListOneExerciseDto, IListOneExerciseRes } from '../../dto';

@Injectable()
export class ExerciseListOneService {
    constructor(
        private exerciseRepositoryQueries: ExerciseRepositoryPrismaService,
        private messages: Messages,
    ) {}

    async listOne({
        id,
    }: IListOneExerciseDto): Promise<
        Either<ParametersError, ParametersSuccess<IListOneExerciseRes>>
    > {
        try {
            const exercise = await this.exerciseRepositoryQueries.listOne({
                id,
            });

            if (!exercise.id)
                return error(
                    new ParametersError(
                        this.messages.language().errorListExercise,
                        Statuscode.BAD_REQUEST,
                        TypeError.BAD_REQUEST,
                    ),
                );

            return success(
                new ParametersSuccess(
                    this.messages.language().successListExercise,
                    Statuscode.OK,
                    exercise,
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
