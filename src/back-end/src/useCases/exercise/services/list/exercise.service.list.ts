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
import { IListExerciseDto, IListExerciseRes } from '../../dto';

@Injectable()
export class ExerciseListAllService {
    constructor(
        private exerciseRepositoryQueries: ExerciseRepositoryPrismaService,
        private messages: Messages,
    ) {}

    async listAll({
        itemsPerPage,
        itemsToSkip,
    }: IListExerciseDto): Promise<
        Either<ParametersError, ParametersSuccess<Array<IListExerciseRes>>>
    > {
        try {
            const { data: exercises, meta } =
                await this.exerciseRepositoryQueries.list({
                    itemsPerPage,
                    itemsToSkip,
                });

            if (exercises.length < 1)
                return error(
                    new ParametersError(
                        this.messages.language().errorListExerciseAll,
                        Statuscode.NO_CONTENT,
                        TypeError.NO_CONTENT,
                    ),
                );

            return success(
                new ParametersSuccess(
                    this.messages.language().successListExerciseAll,
                    Statuscode.OK,
                    exercises,
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
