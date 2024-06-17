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
import { ICreateExerciseDto, ICreateExerciseRes } from '../../dto';

@Injectable()
export class ExerciseCreateService {
    constructor(
        private exerciseRepositoryQueries: ExerciseRepositoryPrismaService,
        private messages: Messages,
    ) {}

    async create({
        name,
    }: ICreateExerciseDto): Promise<
        Either<ParametersError, ParametersSuccess<ICreateExerciseRes>>
    > {
        try {
            const exerciseAlreadyExist =
                await this.exerciseRepositoryQueries.alreadyExist({
                    name,
                });

            if (exerciseAlreadyExist)
                return error(
                    new ParametersError(
                        this.messages.language().errorExerciseAlreadyExist,
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

            const newExercise = await this.exerciseRepositoryQueries.create({
                name,
            });

            if (!newExercise)
                return error(
                    new ParametersError(
                        this.messages.language().errorCreatedExercise,
                        Statuscode.INTERNAL_SERVER_ERROR,
                        TypeError.INTERNAL_SERVER_ERROR,
                    ),
                );

            return success(
                new ParametersSuccess(
                    this.messages.language().successCreatedExercise,
                    Statuscode.CREATED,
                    newExercise,
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
