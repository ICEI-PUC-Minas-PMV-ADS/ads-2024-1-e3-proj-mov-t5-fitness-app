import { IExerciseEntity } from '../entities/exercise.entity';

export type IDeleteExerciseDto = Pick<IExerciseEntity, 'id'>;

export type IDeleteExerciseResDto = IExerciseEntity;
