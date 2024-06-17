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
import { IUpdateExerciseDto, IUpdateExerciseRes } from '../../dto';

@Injectable()
export class ExerciseUpdateService {
    constructor(
        private exerciseRepositoryQueries: ExerciseRepositoryPrismaService,
        private messages: Messages,
    ) {}

    async update({
        id,
        name,
    }: IUpdateExerciseDto): Promise<
        Either<ParametersError, ParametersSuccess<IUpdateExerciseRes>>
    > {
        try {
            const exerciseAlreadyExist =
                await this.exerciseRepositoryQueries.alreadyExist({
                    id,
                    name,
                });

            if (!exerciseAlreadyExist)
                return error(
                    new ParametersError(
                        this.messages.language().errorExerciseNotExist,
                        Statuscode.INTERNAL_SERVER_ERROR,
                        TypeError.INTERNAL_SERVER_ERROR,
                    ),
                );

            if (!name || name.length < 2)
                return error(
                    new ParametersError(
                        this.messages.language().nameExerciseIsRequired,
                        Statuscode.INTERNAL_SERVER_ERROR,
                        TypeError.INTERNAL_SERVER_ERROR,
                    ),
                );

            const exerciseUpdated = await this.exerciseRepositoryQueries.update(
                {
                    id,
                    name,
                },
            );

            if (!exerciseUpdated)
                return error(
                    new ParametersError(
                        this.messages.language().errorUpdatedExercise,
                        Statuscode.BAD_REQUEST,
                        TypeError.BAD_REQUEST,
                    ),
                );

            return success(
                new ParametersSuccess(
                    this.messages.language().successUpdatedExercise,
                    Statuscode.OK,
                    exerciseUpdated,
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
