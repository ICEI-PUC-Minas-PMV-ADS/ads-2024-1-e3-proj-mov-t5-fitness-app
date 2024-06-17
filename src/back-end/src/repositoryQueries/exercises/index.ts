import { IPaginationResponse } from 'src/shared/interfaces';

import {
    IAlreadyExistExerciseDto,
    ICreateExerciseDto,
    ICreateExerciseRes,
    IDeleteExerciseDto,
    IListExerciseDto,
    IListExerciseRes,
    IListOneExerciseDto,
    IListOneExerciseRes,
    IUpdateExerciseDto,
    IUpdateExerciseRes,
} from 'src/useCases/exercise/dto';

import { IExerciseEntity } from 'src/useCases/exercise/entities/exercise.entity';

export interface IExerciseRepositoryQueries {
    create({ name }: ICreateExerciseDto): Promise<ICreateExerciseRes>;

    update({ id, name }: IUpdateExerciseDto): Promise<IUpdateExerciseRes>;

    delete({ id }: IDeleteExerciseDto): Promise<IExerciseEntity>;

    list({
        itemsPerPage,
        itemsToSkip,
    }: IListExerciseDto): Promise<IPaginationResponse<IListExerciseRes>>;

    listOne({ id }: IListOneExerciseDto): Promise<IListOneExerciseRes>;

    alreadyExist({ id }: IAlreadyExistExerciseDto): Promise<boolean>;
}
