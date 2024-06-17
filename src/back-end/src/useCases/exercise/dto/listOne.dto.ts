import { IExerciseEntity } from '../entities/exercise.entity';

export type IListOneExerciseDto = Pick<IExerciseEntity, 'id'>;

export type IListOneExerciseRes = IExerciseEntity;
